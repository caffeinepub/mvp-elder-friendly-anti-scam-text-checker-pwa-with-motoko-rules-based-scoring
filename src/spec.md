# Specification

## Summary
**Goal:** Finalize the AntiFraud release with complete multilingual institutional content, corrected installable PWA behavior, strict AntiFraud / by HCoragem branding, and reliable integration with the three specified IC canisters (including a functional reports flow and improved localized error/empty states).

**Planned changes:**
- Add two new long-form institutional pages with working client-side navigation and basic SEO metadata: `/mission` and `/how-it-works`, fully translated via existing i18n (pt/en/es/fr/zh/ar/ru).
- Update routing and header navigation so informational routes are exactly `/mission`, `/how-it-works`, `/terms`, `/privacy`, while preserving existing `/` core verification/reporting/auth/history flows; keep any legacy institutional routes working via redirect/alias to the new routes.
- Ensure `/terms` renders the previously provided official Terms text verbatim in all supported languages, using the existing i18n-driven section rendering structure.
- Create and implement a new long, professional, liability-minimizing Privacy Policy for `/privacy` in all supported languages using the existing i18n section structure; remove any legacy brand references.
- Fix PWA installability by validating/correcting the manifest, icon paths, start_url/scope, and service worker behavior so installs succeed and SPA routes work in standalone mode.
- Update the primary PWA install CTA copy to exactly `Baixe a Aplicação AntiFraud gratuitamente` for pt, with translations for en/es/fr/zh/ar/ru via i18n.
- Enforce strict global branding: remove all references to legacy brands (e.g., “Caffeine” / “caffeine.ai”); ensure product name is “AntiFraud” and subtitle is exactly “by HCoragem”, with the footer showing only plain text `by HCoragem`, and update HTML/manifest metadata accordingly.
- Audit and lock frontend canister usage to exactly these three IDs only: Main `v63rh-lqaaa-aaaaa-qewvq-cai`, Extra `c6sjf-tqaaa-aaaap-qsiea-cai`, Reports `7w5qg-6aaaa-aaaab-ael4a-cai`; remove/replace any leftover old canister bindings and confirm readiness logs show the active IDs/methods.
- Make the Reports (denúncias) flow fully functional with an initially empty database: submit reports (email/phone/message/crypto) and lookup existing reports; show a clear empty state when no results (not an error), using the existing Reports canister interface only.
- Replace generic technical failure messages with specific helpful localized error states; when collaborative reports lookup returns no matches, show exactly `Sem registos conhecidos — base colaborativa em crescimento.` in pt (and equivalent translations in other languages) and ensure copy positions the database as growing/collaborative.
- Fix message analysis runtime failures by correcting the frontend integration with the Main canister so `analyzeText` succeeds; display the returned Portuguese backend text verbatim, and only show the existing translated block when UI language is not Portuguese.

**User-visible outcome:** Users can navigate polished multilingual institutional/terms/privacy pages, install the AntiFraud PWA successfully, see consistent AntiFraud / by HCoragem branding throughout, run message analyses without generic errors, and submit/lookup collaborative reports with clear localized empty/error states—all while the app reliably connects only to the three specified canisters.
