# Specification

## Summary
**Goal:** Refine Message Analysis (text) risk scoring so critical trigger phrases enforce minimum risk score thresholds based on trigger count, without affecting phone/email/crypto flows.

**Planned changes:**
- Update the frontend Message Analysis text-scoring logic so detected critical trigger phrases override normal incremental scoring and enforce minimum riskScore thresholds: 1 trigger ≥ 85, 2 triggers ≥ 92, 3+ triggers = 100.
- Integrate the provided critical words/phrases into the Message Analysis critical trigger list, with case-insensitive and accent-insensitive matching, and count detected triggers to drive the thresholds.
- Keep Search (Phone) module behavior untouched, ensuring its public number override logic and all phone/email/crypto analysis results remain unaffected.

**User-visible outcome:** Message text analyses will show higher risk scores when critical trigger phrases are present (85/92/100 based on how many are detected), while phone, email, and crypto analysis behavior remains the same.
