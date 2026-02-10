let deferredPrompt: any = null;
let setupCalled = false;

export function setupPWAInstall() {
  // Prevent duplicate listener registration
  if (setupCalled) return;
  setupCalled = true;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
  });
}

export async function triggerPWAInstall(): Promise<boolean> {
  if (!deferredPrompt) return false;
  
  try {
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    const accepted = result.outcome === 'accepted';
    
    // Clear deferred prompt after user choice
    deferredPrompt = null;
    
    return accepted;
  } catch (error) {
    console.error('PWA install prompt error:', error);
    deferredPrompt = null;
    return false;
  }
}
