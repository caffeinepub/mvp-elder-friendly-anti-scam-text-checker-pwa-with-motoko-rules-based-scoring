# Production Build Verification Checklist

This document provides a comprehensive checklist for verifying the production build of AntiFraud / by HCoragem before deployment.

## 1. SPA Navigation & Routing

- [ ] Navigate to `/` (home page) - should display verification interface with 5 tabs
- [ ] Navigate to `/mission` - should display mission page content
- [ ] Navigate to `/how-it-works` - should display how it works page
- [ ] Navigate to `/terms` - should display terms and conditions
- [ ] Navigate to `/privacy` - should display privacy policy
- [ ] Navigate to `/documentation` - should display documentation page with PDF generation
- [ ] Test browser back/forward buttons - navigation should work correctly
- [ ] Refresh page on each route - should stay on the same route (no 404)
- [ ] Test deep links (e.g., share `/mission` URL) - should load correctly

## 2. Consent Gate Modal

- [ ] On first visit, consent modal should appear and block interaction
- [ ] Modal should require both checkboxes to be checked before "Accept" button is enabled
- [ ] "View Terms" button should navigate to `/terms` (modal stays open)
- [ ] "View Privacy" button should navigate to `/privacy` (modal stays open)
- [ ] After accepting, modal should close and not appear again
- [ ] ESC key should not close the modal
- [ ] Clicking outside modal should not close it
- [ ] Clear localStorage and refresh - modal should appear again

## 3. Branding & Visual Identity

- [ ] Page title in browser tab shows "AntiFraud / by HCoragem"
- [ ] Header displays AntiFraud logo image (not text fallback)
- [ ] Footer displays "by HCoragem" with current year (not hardcoded 2024/2025)
- [ ] Footer includes "Built with love using caffeine.ai" with UTM tracking
- [ ] PWA icons (192x192 and 512x512) are visible in manifest
- [ ] Favicon displays correctly in browser tab

## 4. Antifraud Analysis (Frontend-Only)

### Message Analysis
- [ ] Enter a message with urgency keywords (e.g., "URGENT! Send money now!")
- [ ] Should return High risk with explanation citing urgency patterns
- [ ] Result should include public sources (clickable links)
- [ ] Result should include collaborative basis statement

### Email Analysis
- [ ] Enter a suspicious email (e.g., "admin@paypa1.com")
- [ ] Should detect typosquatting or suspicious patterns
- [ ] Result should show risk level with explanation

### Phone Analysis
- [ ] Enter a phone number (e.g., "+351912345678")
- [ ] Should analyze format and patterns
- [ ] Result should show risk assessment

### Crypto Analysis
- [ ] Enter a crypto address (e.g., "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb")
- [ ] Should validate format
- [ ] Result should show risk assessment

## 5. Advanced Contact Lookup

### Basic Search
- [ ] Navigate to "Pesquisa" (Search) tab
- [ ] Enter a valid phone number (e.g., "+351912345678")
- [ ] Should display antifraud analysis result
- [ ] Should display public information section (or "no public info" message)
- [ ] Enter a valid email address (e.g., "test@example.com")
- [ ] Should display antifraud analysis result
- [ ] Should display public information section

### Offline Cached Behavior
- [ ] Perform a search for a contact (phone or email)
- [ ] Open browser DevTools → Network tab → Enable "Offline" mode
- [ ] Search for the same contact again
- [ ] Should display cached result with "Cached result (offline)" indicator
- [ ] Try searching for a different contact (not cached)
- [ ] Should display error: "No internet connection and no cached results"
- [ ] Disable offline mode and verify online search works again

### Report Submission from Lookup
- [ ] Perform a contact lookup (phone or email)
- [ ] Click "Report Suspicious Contact" button in results
- [ ] Dialog should open with prefilled contact value (read-only)
- [ ] Dialog should display anonymity notice in current language
- [ ] Category dropdown should show exactly 4 options: Spam, Phishing, Scam, Other
- [ ] Leave category unselected and submit - should succeed (defaults to "Other")
- [ ] Select "Spam" category and add description, then submit
- [ ] Should show success message and close dialog after brief delay
- [ ] Select "Phishing" category and submit without description - should succeed
- [ ] Select "Scam" category and submit - should succeed
- [ ] Select "Other" category and submit - should succeed
- [ ] Cancel button should close dialog without submitting

## 6. Multilingual Support (i18n)

- [ ] Change language to English (EN) - all UI text should be in English
- [ ] Change language to Spanish (ES) - all UI text should be in Spanish
- [ ] Change language to French (FR) - all UI text should be in French
- [ ] Change language to Chinese (ZH) - all UI text should be in Chinese
- [ ] Change language to Arabic (AR) - all UI text should be in Arabic
- [ ] Change language to Russian (RU) - all UI text should be in Russian
- [ ] Change back to Portuguese (PT) - all UI text should be in Portuguese
- [ ] Verify report dialog labels are translated in each language
- [ ] Verify anonymity notice is translated in each language
- [ ] Verify category options (Spam/Phishing/Scam/Other) are translated
- [ ] No missing translation keys (no "undefined" or placeholder text)

## 7. PWA Installation

- [ ] Open application in Chrome/Edge on desktop
- [ ] Check if install prompt appears (may require user interaction)
- [ ] Click "Download AntiFraud App for free" button
- [ ] Should trigger browser install prompt
- [ ] Install the PWA
- [ ] Open installed PWA - should work as standalone app
- [ ] Verify PWA icon displays correctly
- [ ] Verify PWA name is "AntiFraud / by HCoragem"

### Android WebAPK Test
- [ ] Follow detailed steps in `PWA_WEBAPK_ANDROID_TEST.md`
- [ ] Verify WebAPK installation on Android Chrome
- [ ] Confirm standalone mode and icon display

## 8. Authentication (Internet Identity)

- [ ] Click "Login" button
- [ ] Should redirect to Internet Identity
- [ ] Complete authentication flow
- [ ] Should return to app with authenticated state
- [ ] User profile menu should appear with principal
- [ ] Click "Logout"
- [ ] Should clear authentication and return to anonymous state
- [ ] Verify cached data is cleared on logout

## 9. Production Readiness

### Console Checks
- [ ] Open browser DevTools → Console
- [ ] No critical errors (red messages)
- [ ] Service worker should register successfully
- [ ] No CORS errors
- [ ] No missing resource errors (404s)

### Performance
- [ ] Page load time is acceptable (< 3 seconds on good connection)
- [ ] Interactions are responsive (no lag)
- [ ] Animations are smooth

### Accessibility
- [ ] Tab navigation works through all interactive elements
- [ ] Focus indicators are visible
- [ ] Screen reader can access all content (test with NVDA/JAWS if available)

### Mobile Responsiveness
- [ ] Test on mobile viewport (DevTools responsive mode)
- [ ] All content is readable and accessible
- [ ] Touch targets are appropriately sized
- [ ] Mobile menu works correctly

## 10. Final Sign-Off

- [ ] All checklist items above are verified and passing
- [ ] No critical bugs or issues identified
- [ ] Application is ready for production deployment

**Verified by:** ___________________________  
**Date:** ___________________________  
**Build Version:** ___________________________  

**Status:** [ ] PASS / [ ] FAIL

**Notes:**
_____________________________________________
_____________________________________________
_____________________________________________
