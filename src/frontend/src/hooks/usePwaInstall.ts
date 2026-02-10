import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nProvider';
import { pwaRuntime } from '@/pwa/pwaRuntime';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

interface PwaInstallState {
  isInstallable: boolean;
  isInstalled: boolean;
  platform: 'android' | 'ios' | 'desktop' | 'unknown';
  promptInstall: () => Promise<void>;
  getInstructions: () => string;
}

export function usePwaInstall(): PwaInstallState {
  const { t } = useI18n();
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [platform, setPlatform] = useState<'android' | 'ios' | 'desktop' | 'unknown'>('unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(userAgent);
    const isAndroid = /android/.test(userAgent);
    const isDesktop = !isIOS && !isAndroid;

    if (isIOS) {
      setPlatform('ios');
    } else if (isAndroid) {
      setPlatform('android');
    } else if (isDesktop) {
      setPlatform('desktop');
    }

    // Check if already installed (display-mode standalone or iOS standalone)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (window.navigator as any).standalone === true;
    
    if (isStandalone || isIOSStandalone) {
      setIsInstalled(true);
      setIsInstallable(false);
      return;
    }

    // Check if deferred prompt is already available from runtime
    const checkPromptAvailability = () => {
      const prompt = pwaRuntime.getDeferredPrompt();
      if (prompt) {
        setIsInstallable(true);
      }
    };

    // Initial check
    checkPromptAvailability();

    // Poll for prompt availability (in case it arrives after mount)
    const pollInterval = setInterval(checkPromptAvailability, 500);

    const handleAppInstalled = () => {
      console.log('PWA installed successfully');
      setIsInstalled(true);
      setIsInstallable(false);
      clearInterval(pollInterval);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearInterval(pollInterval);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    const deferredPrompt = pwaRuntime.getDeferredPrompt();
    
    if (!deferredPrompt) {
      console.warn('No deferred prompt available');
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
        setIsInstallable(false);
      }
      
      pwaRuntime.clearDeferredPrompt();
    } catch (error) {
      console.error('Error prompting install:', error);
    }
  };

  const getInstructions = (): string => {
    switch (platform) {
      case 'ios':
        return t.installInstructionsIos;
      case 'android':
        return t.installInstructionsAndroid;
      case 'desktop':
        return t.installInstructionsDesktop;
      default:
        return t.installInstructionsDefault;
    }
  };

  return {
    isInstallable,
    isInstalled,
    platform,
    promptInstall,
    getInstructions,
  };
}
