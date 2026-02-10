# Production Build Verification Checklist

This document provides a comprehensive checklist for verifying that the AntiFraud production build is ready for live deployment.

## 1. SPA Navigation & Routes

### Route Navigation
- [ ] Home route (`/`) loads correctly
- [ ] Mission route (`/mission`) loads correctly
- [ ] How It Works route (`/how-it-works`) loads correctly
- [ ] Terms route (`/terms`) loads correctly
- [ ] Privacy route (`/privacy`) loads correctly
- [ ] Documentation route (`/documentation`) loads correctly

### Route Aliases
- [ ] `/institucional` redirects to `/mission`
- [ ] `/institucional/mission` redirects to `/mission`
- [ ] Trailing slashes are handled correctly (e.g., `/mission/` → `/mission`)

### 404 Fallback
- [ ] Unknown routes redirect to home page
- [ ] Deep links work correctly (refresh on any route returns to app shell)
- [ ] Static 404.html redirects known SPA routes back to the app

## 2. Consent Gate

### Blocking Behavior
- [ ] Consent modal appears on first visit
- [ ] App content is blocked (dimmed/non-interactive) until consent is given
- [ ] Both checkboxes (Cookies + Terms/Privacy) must be checked to enable Accept button
- [ ] ESC key does not close the modal
- [ ] Clicking outside the modal does not close it

### In-Modal Navigation
- [ ] "View Terms" button navigates to `/terms` route
- [ ] "View Privacy" button navigates to `/privacy` route
- [ ] Navigation within modal works without closing it

### Persistence
- [ ] Consent acceptance is stored in localStorage
- [ ] Consent persists across page refreshes
- [ ] Consent persists across browser sessions

## 3. Branding

### Global Branding
- [ ] App title is "AntiFraud / by HCoragem" in browser tab
- [ ] Header displays "AntiFraud" logo/text
- [ ] Footer displays "by HCoragem"
- [ ] No references to old/test branding remain

### Footer Attribution
- [ ] Footer includes "Built with love using caffeine.ai" (or love icon)
- [ ] caffeine.ai link includes correct UTM parameters
- [ ] UTM parameters use `window.location.hostname` as app identifier
- [ ] Link opens in new tab

## 4. Antifraud Analysis

### Message Analysis
- [ ] Message input accepts text
- [ ] Analysis returns risk level (Low/Medium/High)
- [ ] Explanation is provided in current language
- [ ] Recommendation is provided in current language
- [ ] Transparency section shows public sources
- [ ] Transparency section shows collaborative basis statement

### Email Analysis
- [ ] Email input validates format
- [ ] Analysis returns structured result
- [ ] Transparency sections are present

### Phone Analysis
- [ ] Phone input accepts various formats
- [ ] Analysis returns structured result
- [ ] Collaborative database lookup works
- [ ] Empty state message shown when no reports exist
- [ ] Transparency sections are present

### Crypto Analysis
- [ ] Crypto address input accepts hex addresses
- [ ] Analysis returns structured result
- [ ] Collaborative database lookup works
- [ ] Transparency sections are present

## 5. Public Contact Lookup

### Phone Lookup
- [ ] Query returns report count when records exist
- [ ] Query returns null when no records exist
- [ ] Empty state displays localized message
- [ ] Error state displays informational alert

### Crypto Lookup
- [ ] Query returns report count when records exist
- [ ] Query returns null when no records exist
- [ ] Empty state displays localized message
- [ ] Error state displays informational alert

## 6. Multilingual Support

### Language Selector
- [ ] Language selector is visible in header
- [ ] All 7 languages are available (PT/EN/ES/FR/ZH/AR/RU)
- [ ] Language selection persists in sessionStorage

### UI Translation Smoke Tests

#### Portuguese (PT)
- [ ] Navigation labels are in Portuguese
- [ ] Home page content is in Portuguese
- [ ] Consent modal is in Portuguese
- [ ] Analysis results are in Portuguese
- [ ] Institutional pages are in Portuguese

#### English (EN)
- [ ] Navigation labels are in English
- [ ] Home page content is in English
- [ ] Consent modal is in English
- [ ] Analysis results are in English
- [ ] Institutional pages are in English

#### Spanish (ES)
- [ ] Navigation labels are in Spanish
- [ ] Home page content is in Spanish
- [ ] Consent modal is in Spanish
- [ ] Analysis results are in Spanish
- [ ] Institutional pages are in Spanish

#### French (FR)
- [ ] Navigation labels are in French
- [ ] Home page content is in French
- [ ] Consent modal is in French
- [ ] Analysis results are in French
- [ ] Institutional pages are in French

#### Chinese (ZH)
- [ ] Navigation labels are in Chinese
- [ ] Home page content is in Chinese
- [ ] Consent modal is in Chinese
- [ ] Analysis results are in Chinese
- [ ] Institutional pages are in Chinese

#### Arabic (AR)
- [ ] Navigation labels are in Arabic
- [ ] Home page content is in Arabic
- [ ] Consent modal is in Arabic
- [ ] Analysis results are in Arabic
- [ ] Institutional pages are in Arabic

#### Russian (RU)
- [ ] Navigation labels are in Russian
- [ ] Home page content is in Russian
- [ ] Consent modal is in Russian
- [ ] Analysis results are in Russian
- [ ] Institutional pages are in Russian

### No Missing Keys
- [ ] No undefined/missing text appears in any language
- [ ] No fallback to Portuguese when other language is selected

## 7. PWA Installation

### Manifest Detection
- [ ] Browser detects manifest.webmanifest
- [ ] Manifest name is "AntiFraud"
- [ ] Manifest description is production-ready (not test-only)
- [ ] Manifest icons reference correct generated assets

### Service Worker
- [ ] Service worker registers successfully in production mode
- [ ] Service worker uses production cache name (not "antifraud-test")
- [ ] Service worker caches app shell correctly
- [ ] Service worker handles navigation requests correctly
- [ ] No console errors related to service worker

### Install Prompt
- [ ] `beforeinstallprompt` event is captured
- [ ] Install button is visible when app is installable
- [ ] Clicking install button triggers native prompt
- [ ] Install button label is localized correctly
- [ ] Non-eligible message is localized correctly

### Android WebAPK Validation
For detailed Android Chrome WebAPK testing, refer to: `frontend/PWA_WEBAPK_ANDROID_TEST.md`

- [ ] App installs as WebAPK on Android Chrome
- [ ] App icon appears on home screen
- [ ] App opens in standalone mode (no browser UI)
- [ ] `appinstalled` event fires correctly

## 8. Authentication (Internet Identity)

### Login Flow
- [ ] Login button is visible when not authenticated
- [ ] Clicking login opens Internet Identity
- [ ] Successful login updates UI to show user profile
- [ ] User principal is stored correctly

### User Profile
- [ ] First-time users are prompted for name
- [ ] User profile is saved to backend
- [ ] User profile persists across sessions
- [ ] Profile name is displayed in header

### Logout Flow
- [ ] Logout button is visible when authenticated
- [ ] Clicking logout clears identity
- [ ] Logout clears all cached data
- [ ] UI updates to show login button

## 9. Production Readiness

### Performance
- [ ] App loads in under 3 seconds on 3G
- [ ] No unnecessary console logs in production
- [ ] No console errors or warnings
- [ ] Assets are minified and optimized

### Security
- [ ] App is served over HTTPS
- [ ] No sensitive data in localStorage
- [ ] No API keys or secrets in frontend code

### Accessibility
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] Color contrast meets AA standards
- [ ] Screen reader labels are present

### Browser Compatibility
- [ ] Works in Chrome (latest)
- [ ] Works in Firefox (latest)
- [ ] Works in Safari (latest)
- [ ] Works in Edge (latest)
- [ ] Works on mobile browsers (iOS Safari, Chrome Android)

## Pass/Fail Sign-Off

### Final Verification

- [ ] All critical items above are checked and passing
- [ ] No blocking issues remain
- [ ] Build is ready for live deployment

### Sign-Off

**Verified by:** _________________________

**Date:** _________________________

**Build Version:** _________________________

**Deployment Status:** 
- [ ] ✅ PASS - Ready for production
- [ ] ❌ FAIL - Issues must be resolved before deployment

**Notes:**

_____________________________________________

_____________________________________________

_____________________________________________
