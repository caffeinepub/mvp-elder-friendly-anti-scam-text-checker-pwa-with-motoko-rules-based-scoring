# Specification

## Summary
**Goal:** Temporarily implement a minimal PWA/WebAPK install test flow by swapping in user-provided manifest, service worker, and install capture logic, plus a simple install button on the Home page.

**Planned changes:**
- Replace `frontend/public/manifest.webmanifest` with the exact minimal test manifest content provided by the user, keeping the existing generated 192/512 icon paths.
- Replace `frontend/public/service-worker.js` with the exact minimal test service worker provided by the user (including `CACHE_NAME = 'antifraud-test'`, app-shell caching, activation cleanup, and network-first fetch with cache fallback).
- Replace `frontend/src/pwa/install.ts` with the user-provided minimal `beforeinstallprompt` capture + `triggerPWAInstall()` implementation, including a local TypeScript `declare global` for `window.PWA_CAN_INSTALL`.
- Add `frontend/src/components/InstallButton.tsx` that calls `triggerPWAInstall()` on click and alerts when install is not yet eligible; update the Home page to render `InstallButton` instead of `PwaInstallAction` without changing any other Home content/behavior.
- Add `frontend/PWA_WEBAPK_ANDROID_TEST.md` containing the repeatable Android Chrome validation checklist and ending with only the two allowed outcome statements.

**User-visible outcome:** The Home page shows a minimal Install button that triggers the native install prompt when eligible; developers also have a step-by-step Android Chrome checklist to confirm whether AntiFraud installs as a real app (WebAPK) versus only a shortcut.
