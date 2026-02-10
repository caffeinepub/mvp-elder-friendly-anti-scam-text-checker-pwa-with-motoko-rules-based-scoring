# Specification

## Summary
**Goal:** Apply targeted, visible frontend fixes to improve PWA installability, enforce a non-dismissible mandatory consent gate, and polish page layout styling without rebuilding or changing content/analysis logic.

**Planned changes:**
- Ensure the existing service worker (`public/service-worker.js`) is registered at runtime and becomes the controlling service worker for the page (with activation/refresh behavior working as expected).
- Fix the PWA install CTA behavior so `PwaInstallAction` reliably uses the captured `beforeinstallprompt` deferred prompt when available (triggering the native install prompt instead of fallback behavior).
- Make the consent gate modal strictly non-dismissible until all required consents (cookies + terms + privacy) are accepted; prevent closing via ESC, outside click, or overlay interactions; keep persistence via the existing localStorage consent version/state.
- Apply targeted layout/styling adjustments to `InstitutionalPageLayout` and main pages (Home, Mission, How It Works, Terms, Privacy) to improve spacing rhythm, readability, and consistent container behavior across mobile/desktop—without changing text content.

**User-visible outcome:** The app installs as a proper standalone PWA via a reliable install prompt when supported, users must accept required consents before using the app, and key pages feel more consistent and readable across devices.
