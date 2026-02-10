# Specification

## Summary
**Goal:** Update AntiFraud informational content, localization, and routing so official Portuguese text is displayed verbatim, analysis outputs are fully localized, and legacy routes remain compatible.

**Planned changes:**
- Insert the user-provided official AntiFraud / by HCoragem Portuguese (pt) content verbatim into the existing i18n/content system and render it on `/mission` and `/how-it-works`.
- Update the Message analysis textarea placeholder to exactly `Cole aqui a mensagem recebida` for pt, and add translations for en/es/fr/zh/ar/ru via the existing i18n system.
- Ensure the Home heuristic analyses (Message/Email/Phone/Crypto) produce Risk/Explanation/Recommendation entirely in the currently selected UI language with no mixed-language output, remaining frontend-only (no canister calls).
- Add mandatory High-risk keyword overrides for Message analysis when the input contains (case-insensitive) any of: `dinheiro`, `lucro`, `promoção`, `oportunidade`, `grátis`, `encontros`, `investimento`, `criptomoeda`.
- Align informational routing so `/`, `/mission`, `/how-it-works`, `/terms`, and `/privacy` render correctly, while legacy routes (including `/institucional` and `/institucional/mission`) continue to work via alias/redirect behavior.

**User-visible outcome:** Users can navigate to the finalized Mission and How It Works pages at the new routes with the official Portuguese text exactly as provided, see a corrected localized Message placeholder, run fully localized offline heuristic analyses, and access both current and legacy informational routes without broken navigation.
