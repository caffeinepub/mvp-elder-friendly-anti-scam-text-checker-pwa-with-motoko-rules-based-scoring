# Specification

## Summary
**Goal:** Add ES/FR/DE language support with a safe PT fallback, ensure the language dropdown consistently offers PT/EN/ES/FR/DE, and update the responsive footer with official reference links.

**Planned changes:**
- Expand i18n to recognize `pt`, `en`, `es`, `fr`, `de` and ensure missing keys fall back to Portuguese instead of rendering blank/undefined.
- Update the language selector dropdown to list exactly PT, EN, ES, FR, DE (with appropriate native names), and reflect the selected language (desktop: native name; mobile: 2-letter code).
- Update the footer to add the references line: “References public cybersecurity advisories from:” followed by clickable links to ENISA, CISA, CNCS, and Europol, while preserving “by HCoragem” and the existing Internet Computer/ICP credit section.
- Ensure the language selector and footer remain fully responsive on mobile/desktop and that any icons/images they use resolve from the frontend `/assets/` path (rendering crisply at small sizes like 16x16).

**User-visible outcome:** Users can switch the UI language between PT/EN/ES/FR/DE without navigation changes, untranslated strings safely display in Portuguese, and the footer shows responsive, clickable official reference links while keeping existing credits intact.
