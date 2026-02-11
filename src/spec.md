# Specification

## Summary
**Goal:** Add a new “International Contact Search” module with a dedicated frontend page and a secure backend intermediary that returns legally-compliant, source-attributed lookup results, while cleaning up branding and improving footer source attributions.

**Planned changes:**
- Add a new frontend route and dedicated page for “International Contact Search”, linked from the main navigation (desktop + mobile), with localized strings.
- Extend SPA routing to include the new page while preserving existing redirects, SPA fallback behavior, and the existing consent-gate behavior.
- Add a new backend (canister) method to perform an international contact lookup via public/legal sources and return a structured result with per-field source attribution URLs (no API keys exposed).
- Add backend provider configuration management: admin-only method to set/update provider config (including keys) and a frontend-safe method to read which providers are enabled (no secrets).
- Extend the existing AntiFraud heuristics logic to normalize international phone numbers, infer origin country by prefix, and compute a numeric risk score + low/medium/high risk level using heuristic and provider signals.
- Update frontend canister interface bindings and wire the new page UI to call the backend, showing loading/error states and rendering partial results when some providers are unavailable.
- Remove any visible “Caffeine” branding from UI and metadata wherever it appears.
- Make footer data-source logos/icons clickable with proper attribution/source links, preserving absolute `/assets/...` paths and 16x16 mobile rendering.

**User-visible outcome:** Users can open a new “International Contact Search” page from the main menu, enter a phone number or email, run a lookup, and see a detailed risk assessment (risk level + numeric score), origin country (when applicable), contributing factors, public alert/report history, and clickable source links; the app no longer shows “Caffeine” branding, and footer provider icons link to their official sources.
