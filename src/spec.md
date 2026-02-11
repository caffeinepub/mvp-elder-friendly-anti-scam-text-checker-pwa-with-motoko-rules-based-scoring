# Specification

## Summary
**Goal:** Add a production-ready Advanced Contact Lookup module that lets users search by phone or email, see public-source metadata with attribution/date, and view antifraud risk analysis, with offline-friendly behavior and full multilingual UI.

**Planned changes:**
- Add a new “Advanced Contact Lookup” UI module with a single input (phone or email), basic validation, input-type detection, and a dedicated “Search” button.
- Integrate results with the existing frontend-only antifraud engine to show a structured Low/Medium/High risk outcome plus localized explanation and recommendation.
- Implement a public-information lookup layer that returns only legally safe public metadata and always displays source name, source URL (when applicable), and “as of” date; show a localized “No public information found” state when applicable.
- Enable PWA/WebAPK-compatible offline partial behavior: cache module static/same-origin resources and keep previously viewed lookup results available offline (best-effort) with an offline indicator when refresh isn’t possible.
- Add i18n entries for all new UI text across PT/EN/ES/FR/ZH/AR/RU and integrate the module into the existing navigation/UI without disrupting existing Home verification tabs.

**User-visible outcome:** Users can open an Advanced Contact Lookup area, enter a phone number or email, press Search, and see public-source information (with attribution and date) plus a localized antifraud risk assessment; previously viewed results remain accessible when offline.
