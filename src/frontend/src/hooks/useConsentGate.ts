import { useState, useEffect } from 'react';

const CONSENT_KEY = 'antifraud_consent';
const CURRENT_TERMS_VERSION = 1; // Increment when terms change

interface ConsentData {
  accepted: boolean;
  timestamp: number;
  version: number;
}

export function useConsentGate() {
  const [consentRequired, setConsentRequired] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const data: ConsentData = JSON.parse(stored);
        // Require re-consent if version changed
        if (data.accepted && data.version === CURRENT_TERMS_VERSION) {
          setConsentRequired(false);
        }
      }
    } catch (error) {
      console.error('Error loading consent state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const acceptConsent = () => {
    const data: ConsentData = {
      accepted: true,
      timestamp: Date.now(),
      version: CURRENT_TERMS_VERSION,
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
    setConsentRequired(false);
  };

  return {
    consentRequired,
    isLoading,
    acceptConsent,
    currentVersion: CURRENT_TERMS_VERSION,
  };
}
