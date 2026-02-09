import { Actor, HttpAgent } from '@dfinity/agent';
import { getCanisterId } from './canisterIds';
import { mainIdlFactory, type MainCanisterInterface } from './idl/main.idl';
import { extraIdlFactory, type ExtraCanisterInterface } from './idl/extra.idl';
import { reportsIdlFactory, type ReportsCanisterInterface } from './idl/reports.idl';

// Always use IC mainnet host to avoid local network permission prompts
const host = 'https://ic0.app';

export async function createAgent(identity?: any): Promise<HttpAgent> {
  const agent = new HttpAgent({
    host,
    identity,
  });

  // Note: fetchRootKey is never called in production to avoid security issues
  // Local development should use ic0.app host as well

  return agent;
}

export async function createMainActor(identity?: any): Promise<MainCanisterInterface> {
  const agent = await createAgent(identity);
  return Actor.createActor<MainCanisterInterface>(mainIdlFactory, {
    agent,
    canisterId: getCanisterId('main'),
  });
}

export async function createExtraActor(identity?: any): Promise<ExtraCanisterInterface> {
  const agent = await createAgent(identity);
  return Actor.createActor<ExtraCanisterInterface>(extraIdlFactory, {
    agent,
    canisterId: getCanisterId('extra'),
  });
}

export async function createReportsActor(identity?: any): Promise<ReportsCanisterInterface> {
  const agent = await createAgent(identity);
  return Actor.createActor<ReportsCanisterInterface>(reportsIdlFactory, {
    agent,
    canisterId: getCanisterId('reports'),
  });
}
