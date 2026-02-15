# Specification

## Summary
**Goal:** Add a minimal frontend-only public-location search path that detects certain keywords and queries OpenStreetMap Nominatim, showing results in the existing results area while keeping existing scoring and UI structure unchanged.

**Planned changes:**
- Add an isolated frontend Search module (utility/hook/components as needed) that detects public-location keywords in an accent-insensitive and case-insensitive way and, when detected, queries OpenStreetMap Nominatim for public categories (hospital, police, fire_station, government, emergency).
- Render Nominatim public-location results inside the existing results display container (no new panels/sections), matching the current result styling; show entity name, category, city/region, and phone number (if available), with error/empty states shown in the same area.
- For Nominatim-sourced public-location entities only, override displayed risk output to risk_score = 0 and risk_level = LOW without changing normal scoring/heuristics for other searches.
- Remove platform references from the footer and from metadata (HTML head/SEO helpers/manifest) so no platform branding/links appear; ensure any new/modified user-facing strings in this phase are English.

**User-visible outcome:** Users can enter queries like “polícia/policia” or “hospital” and see public entity results (with basic details) in the existing results area, always marked as LOW risk (score 0), while normal searches behave as before and platform branding is removed from footer/metadata.
