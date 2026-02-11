# Specification

## Summary
**Goal:** Add an in-context anonymous “Report suspicious contact” action to Advanced Contact Lookup results, with limited tag choices, offline-friendly lookup behavior, full i18n coverage, and updated production verification steps.

**Planned changes:**
- Add a clear “Report suspicious contact” action within the Advanced Contact Lookup results panel that opens the existing report submission dialog prefilled with the searched phone/email and correct report type, without requiring authentication.
- In the lookup-triggered reporting dialog, restrict user-selectable tags to: Spam, Phishing, Scam, Other; map selections to the existing report category model and default safely when no tag is selected.
- Ensure previously searched Advanced Contact Lookup results can be displayed offline on a best-effort basis using existing local cache, and confirm the service worker precaches `/data/public-contact-lookup.json` while keeping current network-first with cache fallback behavior and PWA installability intact.
- Add/verify i18n strings (PT/EN/ES/FR/ZH/AR/RU) for all user-facing text introduced/changed in the reporting-from-lookup flow, including an anonymity/legal notice (English in EN).
- Update `frontend/PRODUCTION_BUILD_VERIFICATION.md` with concrete, repeatable checklist steps for lookup (phone/email), offline cached lookup, and submitting an anonymous report from lookup results with the four tags.

**User-visible outcome:** Users can search a phone/email in Advanced Contact Lookup, optionally report it anonymously from the results with one of four tags, see appropriate localized UI text, and still view previously searched results when offline (when available in cache), with updated production test steps documenting the flow.
