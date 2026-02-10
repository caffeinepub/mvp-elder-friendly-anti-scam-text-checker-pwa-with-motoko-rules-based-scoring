# Specification

## Summary
**Goal:** Implement a fully frontend, deterministic antifraud analysis engine for all Home verification tabs, with localized outputs and mandatory High-risk overrides for critical scam keywords.

**Planned changes:**
- Implement/complete frontend-only analyze functions for Message/Email/Phone/Crypto that return a consistent structured result (risk: Low/Medium/High, explanation, recommendation) without any backend/canister calls.
- Add mandatory High-risk keyword override for message analysis across PT/EN/ES/FR/ZH/AR/RU (case-insensitive and accent-insensitive where applicable), forcing risk to High and explicitly stating this trigger in the explanation.
- Localize all antifraud outputs for PT/EN/ES/FR/ZH/AR/RU, including indicator labels/phrases embedded in explanations and recommendations, with a consistent fallback to English for unsupported language codes.

**User-visible outcome:** On the Home page, users can run Message/Email/Phone/Crypto scam checks that produce localized risk results and guidance entirely on-device (frontend-only), including guaranteed High-risk warnings when critical scam keywords are detected in messages.
