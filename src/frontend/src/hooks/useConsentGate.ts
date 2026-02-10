import { useState, useEffect } from 'react';

// Consent version - bump this to force re-consent
const CONSENT_VERSION = 2;
const CONSENT_STORAGE_KEY = 'antifraud_consent_state';

interface ConsentState {
  version: number;
  cookiesAccepted: boolean;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  timestamp: number;
}

export function useConsentGate() {
  const [consentRequired, setConsentRequired] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check localStorage for existing consent
    try {
      const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
      if (stored) {
        const state: ConsentState = JSON.parse(stored);
        // Check if consent is valid (same version and all accepted)
        if (
          state.version === CONSENT_VERSION &&
          state.cookiesAccepted &&
          state.termsAccepted &&
          state.privacyAccepted
        ) {
          setConsentRequired(false);
        }
      }
    } catch (error) {
      console.error('Error reading consent state:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const acceptConsent = () => {
    try {
      const state: ConsentState = {
        version: CONSENT_VERSION,
        cookiesAccepted: true,
        termsAccepted: true,
        privacyAccepted: true,
        timestamp: Date.now(),
      };
      localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
      setConsentRequired(false);
    } catch (error) {
      console.error('Error saving consent state:', error);
    }
  };

  return {
    consentRequired,
    isLoading,
    acceptConsent,
  };
}
