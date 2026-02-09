import { useState, useEffect } from 'react';
import { useInternetIdentity } from './useInternetIdentity';
import { createMainActor, createExtraActor, createReportsActor } from '@/ic/actors';
import type { MainCanisterInterface } from '@/ic/idl/main.idl';
import type { ExtraCanisterInterface } from '@/ic/idl/extra.idl';
import type { ReportsCanisterInterface } from '@/ic/idl/reports.idl';

interface AntiFraudActors {
  mainActor: MainCanisterInterface | null;
  extraActor: ExtraCanisterInterface | null;
  reportsActor: ReportsCanisterInterface | null;
  isFetching: boolean;
}

export function useAntiFraudActors(): AntiFraudActors {
  const { identity, isInitializing } = useInternetIdentity();
  const [mainActor, setMainActor] = useState<MainCanisterInterface | null>(null);
  const [extraActor, setExtraActor] = useState<ExtraCanisterInterface | null>(null);
  const [reportsActor, setReportsActor] = useState<ReportsCanisterInterface | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function initActors() {
      setIsFetching(true);
      try {
        const [main, extra, reports] = await Promise.all([
          createMainActor(identity),
          createExtraActor(identity),
          createReportsActor(identity),
        ]);

        if (!cancelled) {
          setMainActor(main);
          setExtraActor(extra);
          setReportsActor(reports);
        }
      } catch (error) {
        console.error('Error initializing actors:', error);
        if (!cancelled) {
          setMainActor(null);
          setExtraActor(null);
          setReportsActor(null);
        }
      } finally {
        if (!cancelled) {
          setIsFetching(false);
        }
      }
    }

    if (!isInitializing) {
      initActors();
    }

    return () => {
      cancelled = true;
    };
  }, [identity, isInitializing]);

  return {
    mainActor,
    extraActor,
    reportsActor,
    isFetching: isFetching || isInitializing,
  };
}
