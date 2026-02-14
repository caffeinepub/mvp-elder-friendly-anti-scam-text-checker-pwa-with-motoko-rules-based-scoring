# Specification

## Summary
**Goal:** Incrementally update AntiFraud scoring logic by adding cumulative message-text keyword/phrase dictionary scoring and enforcing a LOW (0%) override for public/official phone lookups, without changing UI/layout or non-target analysis flows.

**Planned changes:**
- Add an internal `risk_dictionary` to the message-text analysis logic with `severity: "critical"` and `risk_level: "maximum"`, containing the provided keyword/phrase groups, applied only to message text analysis.
- Implement cumulative, occurrence-based scoring for message-text dictionary matches and clamp the final message risk score to the app’s existing scoring bounds.
- In the phone search UI flow, when a number is detected as a public/official entity, always show entity name and country and force displayed risk to LOW at 0% (0/100), overriding other phone risk signals.
- Keep changes as a logic-only patch: no new pages/routes, no layout changes, no persistence, no backend API surface changes, and no modifications to crypto/email/seals/research modules beyond the specified override.

**User-visible outcome:** Message text risk scoring increases cumulatively as more (or repeated) risky keywords/phrases appear, while public/official phone numbers always display the entity name/country and show LOW risk at 0% regardless of other signals.
