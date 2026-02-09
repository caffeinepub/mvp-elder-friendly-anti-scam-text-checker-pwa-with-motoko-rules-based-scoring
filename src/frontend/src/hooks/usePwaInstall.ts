import { useState, useEffect } from 'react';
import { useI18n } from '@/i18n/I18nProvider';

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
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
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

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
      setIsInstallable(false);
      return;
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      console.log('PWA installed successfully');
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      
      // Only mark as installed when user accepts AND appinstalled event fires
      // The appinstalled event handler will set isInstalled to true
      if (choiceResult.outcome === 'dismissed') {
        setDeferredPrompt(null);
        setIsInstallable(false);
      }
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
