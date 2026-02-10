declare global {
  interface Window {
    PWA_CAN_INSTALL?: boolean;
  }
}

let deferredPrompt: any = null;

export function setupPWAInstall() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    window.PWA_CAN_INSTALL = true;
    console.log('[PWA] beforeinstallprompt capturado');
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    window.PWA_CAN_INSTALL = false;
    console.log('[PWA] App instalado');
  });
}

export async function triggerPWAInstall() {
  if (!deferredPrompt) return false;
  deferredPrompt.prompt();
  const result = await deferredPrompt.userChoice;
  deferredPrompt = null;
  return result.outcome === 'accepted';
}
