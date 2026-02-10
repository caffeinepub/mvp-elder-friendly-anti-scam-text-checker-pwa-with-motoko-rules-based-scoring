# Specification

## Summary
**Goal:** Add transparent, user-visible citations to public legal sources and a clear collaborative-basis explanation to every antifraud structured analysis result, fully localized across all supported languages.

**Planned changes:**
- Extend the `StructuredAnalysisResult` frontend model to include a renderable transparency payload: (1) a `sources` list (name + absolute `https://` URL) and (2) a collaborative-basis descriptor (human-readable statement with optional identifiers if needed).
- Update all antifraud analyzers (`analyzeMessage`, `analyzeEmail`, `analyzePhone`, `analyzeCrypto`) to always populate a non-empty public-sources list (at least 2) and a truthful collaborative-basis statement, without adding any backend/canister calls.
- Update `StructuredAnalysisResultCard` UI to display a “Public sources” section (safe clickable links) and a “Collaborative basis” section (statement text) for every shown result.
- Add i18n keys and translations for the new transparency sections (headings/labels) across PT/EN/ES/FR/ZH/AR/RU, ensuring language switching updates these labels with no raw-key fallback.

**User-visible outcome:** Every structured antifraud analysis result now shows a localized “Public sources” list with clickable references and a localized “Collaborative basis” explanation describing what community/collaborative data was (or was not) used.
