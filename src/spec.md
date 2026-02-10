# Specification

## Summary
**Goal:** Finalize the production frontend build by consolidating PWA/WebAPK configuration, completing i18n coverage, and adding a repeatable production verification checklist.

**Planned changes:**
- Update the PWA production manifest and service worker to final production versions (remove test-only values), while preserving existing AntiFraud branding and generated icon paths.
- Replace the temporary PWA install prompt capture with finalized `setupPWAInstall()` / `triggerPWAInstall()` behavior (capture `beforeinstallprompt`, clear on `appinstalled`, and resolve acceptance correctly).
- Make the install CTA fully localized by routing the button label and fallback messaging through i18n for all supported languages (PT/EN/ES/FR/ZH/AR/RU).
- Complete and integrate full translations for EN/ES/FR/ZH/AR/RU based on the official Portuguese source across navigation, consent, PWA install UI, analysis results (including transparency), and institutional pages.
- Add an English production verification checklist/report markdown document covering critical flows (routes, consent gate, branding, antifraud engine flows, contact lookup behavior, translations, and PWA/WebAPK validation), with pass/fail sign-off.

**User-visible outcome:** The app is production-ready with a stable installable PWA experience, complete multilingual UI/content across all supported languages, and an included checklist to verify the build end-to-end before deployment.
