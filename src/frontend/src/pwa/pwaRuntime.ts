/**
 * PWA Runtime Singleton
 * 
 * Manages service worker registration and beforeinstallprompt event capture
 * at the earliest possible moment (app startup) to ensure reliable PWA behavior.
 */

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

class PwaRuntime {
  private deferredPrompt: BeforeInstallPromptEvent | null = null;
  private swRegistration: ServiceWorkerRegistration | null = null;
  private isControlled = false;

  constructor() {
    // Capture beforeinstallprompt as early as possible
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
      window.addEventListener('appinstalled', this.handleAppInstalled);
    }
  }

  private handleBeforeInstallPrompt = (e: Event) => {
    e.preventDefault();
    this.deferredPrompt = e as BeforeInstallPromptEvent;
    console.log('PWA: beforeinstallprompt captured');
  };

  private handleAppInstalled = () => {
    console.log('PWA: app installed');
    this.deferredPrompt = null;
  };

  /**
   * Register the service worker and claim clients
   */
  async registerServiceWorker(): Promise<void> {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      console.warn('PWA: Service workers not supported');
      return;
    }

    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js', {
        scope: '/',
      });

      this.swRegistration = registration;
      console.log('PWA: Service worker registered', registration.scope);

      // Wait for the service worker to become active and controlling
      if (navigator.serviceWorker.controller) {
        this.isControlled = true;
        console.log('PWA: Service worker already controlling');
      } else {
        // Wait for controllerchange event
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          this.isControlled = true;
          console.log('PWA: Service worker now controlling');
        });
      }

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('PWA: New service worker available');
            }
          });
        }
      });
    } catch (error) {
      console.error('PWA: Service worker registration failed:', error);
    }
  }

  /**
   * Get the stored deferred prompt (if available)
   */
  getDeferredPrompt(): BeforeInstallPromptEvent | null {
    return this.deferredPrompt;
  }

  /**
   * Clear the deferred prompt (after use)
   */
  clearDeferredPrompt(): void {
    this.deferredPrompt = null;
  }

  /**
   * Check if service worker is controlling the page
   */
  isServiceWorkerControlling(): boolean {
    return this.isControlled;
  }

  /**
   * Get the service worker registration
   */
  getRegistration(): ServiceWorkerRegistration | null {
    return this.swRegistration;
  }
}

// Export singleton instance
export const pwaRuntime = new PwaRuntime();
