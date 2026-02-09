# Specification

## Summary
**Goal:** Finalize AntiFraud PWA install experience, institutional content, and integrate the Reports canister for collaborative risk lookups and user report submissions.

**Planned changes:**
- Update PWA manifest + HTML metadata to match final AntiFraud branding: set `name`/`short_name` to "AntiFraud", align `theme_color`/`background_color` with the app theme, replace all `vite.svg` references with AntiFraud PNG icons, and remove any legacy branding strings from user-visible metadata.
- Implement install UX: capture `beforeinstallprompt` where supported and expose an "Install app" quick action to trigger `prompt()`; show platform-appropriate fallback instructions when prompting isn’t available (e.g., iOS Safari).
- Add a new multilingual Institutional / How It Works page at `/institucional` (pt/en/es/fr/zh/ar/ru) and link it from top navigation, while preserving existing routes (`/`, `/institucional/mission`, `/terms`).
- Integrate the Reports canister `7w5qg-6aaaa-aaaab-ael4a-cai`: replace the placeholder reports IDL with the real Candid interface and wire typed frontend calls for collaborative lookups (score 0–100, report count, categories) and user report submission.
- Extend the main dashboard (`/`) with:
  - A visible "Report" flow (Type, Value, Category, Country, optional description) with minimal validation, localized UI strings, simple client-side anti-spam/rate limiting, and recording into the existing local-only user history when logged in.
  - Collaborative verification results for message/email/phone/crypto (score, counts, categories) plus a localized legal disclaimer: "This information is collaborative and does not constitute an official decision."
  - Quick-action controls: "Check risk", "Search database", "Report", "Install app" (mobile-friendly and accessible).
- Replace generic error copy across message analysis/database/report flows with specific, helpful localized error states (no internal details, no legacy branding).

**User-visible outcome:** Users can install AntiFraud more easily, read a complete multilingual “How it works” institutional page, quickly access key dashboard actions, check collaborative risk data (with disclaimer), and submit fraud reports with validation and rate limiting—all using the Reports canister integration.
