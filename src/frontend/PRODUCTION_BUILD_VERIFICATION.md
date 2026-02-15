# Production Build Verification Checklist

This document provides a comprehensive verification workflow for production builds.

## Section 0: Clean Restart Preflight (MANDATORY for from-scratch verification)

Before executing the full verification workflow, perform these cleanup steps to ensure a pristine environment:

### 0.1 Clear Browser State
- [ ] Clear all browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- [ ] Clear all cookies and site data for localhost:3000
- [ ] Clear localStorage and sessionStorage via DevTools Console:
  ```javascript
  localStorage.clear();
  sessionStorage.clear();
  ```

### 0.2 Unregister Service Workers
- [ ] Open DevTools → Application → Service Workers
- [ ] Click "Unregister" for all registered service workers
- [ ] Verify "No service workers" message appears

### 0.3 Clean Build Artifacts
- [ ] Delete `frontend/dist/` directory
- [ ] Delete `frontend/node_modules/.vite/` cache directory
- [ ] Verify no stale build outputs remain

### 0.4 Fresh Dependency Installation
- [ ] Run `cd frontend && pnpm install` to ensure clean dependency state
- [ ] Verify no package resolution warnings

### 0.5 Fresh Production Build
- [ ] Run `cd frontend && pnpm build` to generate clean production artifacts
- [ ] Verify build completes without errors
- [ ] Verify `frontend/dist/` contains fresh output

---

## Section 1: Core Functionality

### 1.1 Message Analysis
- [ ] Navigate to Home → Message tab
- [ ] Enter test message with urgency keywords (e.g., "Urgente! Atualize seus dados bancários agora")
- [ ] Verify risk score displays (should be High risk with score 70-100)
- [ ] Verify explanation and recommendation appear in Portuguese
- [ ] Verify structured result card displays with proper styling
- [ ] Test with critical trigger phrases (e.g., "Olá pai, mudei de número")
- [ ] Verify critical trigger detection elevates risk to 85-100%
- [ ] Test with 2 critical triggers - verify minimum 92% score
- [ ] Test with 3+ critical triggers - verify exactly 100% score

### 1.2 Email Analysis
- [ ] Navigate to Home → Email tab
- [ ] Enter test email (e.g., "test@tempmail.com")
- [ ] Verify risk assessment displays
- [ ] Verify disposable email detection works
- [ ] Verify critical triggers do NOT affect email scoring

### 1.3 Phone Analysis
- [ ] Navigate to Home → Phone tab
- [ ] Enter test phone number (e.g., "+351912345678")
- [ ] Verify risk assessment displays
- [ ] Verify pattern detection (repeating digits, sequential patterns)
- [ ] Verify critical triggers do NOT affect phone scoring

### 1.4 Crypto Analysis
- [ ] Navigate to Home → Crypto tab
- [ ] Enter test crypto address (e.g., "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa")
- [ ] Verify risk assessment displays
- [ ] Verify address format validation works
- [ ] Verify critical triggers do NOT affect crypto scoring

### 1.5 Advanced Contact Lookup
- [ ] Navigate to Home → Lookup tab
- [ ] Enter test contact (phone or email)
- [ ] Verify lookup executes
- [ ] Verify result card displays with proper formatting
- [ ] Verify report dialog opens for phone/email (not crypto)

---

## Section 2: Authentication & Authorization

### 2.1 Internet Identity Login
- [ ] Click "Login" button in header
- [ ] Verify Internet Identity modal opens
- [ ] Complete authentication flow
- [ ] Verify user profile menu appears after login
- [ ] Verify principal ID displays in dropdown

### 2.2 User Profile Setup
- [ ] On first login, verify profile setup modal appears
- [ ] Enter name and save profile
- [ ] Verify modal closes and name displays in header
- [ ] Logout and login again - verify no profile setup prompt

### 2.3 Admin Access (if applicable)
- [ ] Login as admin user
- [ ] Navigate to /admin/terms
- [ ] Verify admin editor loads
- [ ] Verify non-admin users cannot access admin routes

---

## Section 3: Internationalization (i18n)

### 3.1 Language Switching
- [ ] Click language selector in header
- [ ] Switch to English (EN)
- [ ] Verify all UI text updates to English
- [ ] Verify message analysis results display in English
- [ ] Switch back to Portuguese (PT)
- [ ] Verify all UI text updates to Portuguese

### 3.2 Translation Coverage
- [ ] Verify footer displays correct language
- [ ] Verify navigation menu items translate
- [ ] Verify form labels and buttons translate
- [ ] Verify error messages translate
- [ ] Verify analysis results translate

---

## Section 4: PWA Functionality

### 4.1 Service Worker Registration
- [ ] Open DevTools → Application → Service Workers
- [ ] Verify service worker is registered and active
- [ ] Verify no console errors related to service worker

### 4.2 Install Prompt
- [ ] Verify PWA install button appears in header (if supported)
- [ ] Click install button
- [ ] Verify browser install prompt appears (Chrome/Edge)
- [ ] Complete installation
- [ ] Verify app opens in standalone mode

### 4.3 Offline Capability
- [ ] Open app in standalone mode
- [ ] Open DevTools → Network → Set to "Offline"
- [ ] Navigate between pages
- [ ] Verify app shell loads from cache
- [ ] Verify graceful degradation for network requests

---

## Section 5: Responsive Design

### 5.1 Mobile View (< 640px)
- [ ] Resize browser to mobile width
- [ ] Verify mobile menu hamburger appears
- [ ] Verify navigation collapses correctly
- [ ] Verify forms are usable on mobile
- [ ] Verify result cards stack properly

### 5.2 Tablet View (640px - 1024px)
- [ ] Resize browser to tablet width
- [ ] Verify layout adapts appropriately
- [ ] Verify navigation remains accessible

### 5.3 Desktop View (> 1024px)
- [ ] Resize browser to desktop width
- [ ] Verify full navigation displays
- [ ] Verify optimal content width
- [ ] Verify no horizontal scrolling

---

## Section 6: Legal & Compliance

### 6.1 Consent Gate
- [ ] Clear localStorage and refresh
- [ ] Verify consent modal appears on first visit
- [ ] Verify checkbox must be checked to proceed
- [ ] Accept consent and verify modal closes
- [ ] Verify consent persists across sessions

### 6.2 Terms & Privacy
- [ ] Navigate to /terms
- [ ] Verify complete terms content displays
- [ ] Verify public entity seals display
- [ ] Navigate to /privacy
- [ ] Verify complete privacy policy displays

### 6.3 Cookie Management
- [ ] Click user profile menu → Cookie Settings
- [ ] Verify cookie settings modal opens
- [ ] Verify explanation of stored data
- [ ] Click "Clear History" and verify confirmation

---

## Section 7: Performance & Optimization

### 7.1 Load Time
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Verify initial page load < 3 seconds
- [ ] Verify no render-blocking resources

### 7.2 Bundle Size
- [ ] Check Network tab for main bundle size
- [ ] Verify main JS bundle < 500KB (gzipped)
- [ ] Verify no duplicate dependencies

### 7.3 Lighthouse Audit
- [ ] Run Lighthouse audit in DevTools
- [ ] Verify Performance score > 90
- [ ] Verify Accessibility score > 90
- [ ] Verify Best Practices score > 90
- [ ] Verify SEO score > 90

---

## Section 8: Error Handling

### 8.1 Network Errors
- [ ] Simulate network failure during lookup
- [ ] Verify error message displays
- [ ] Verify app remains functional after error

### 8.2 Invalid Input
- [ ] Enter invalid email format
- [ ] Verify validation error displays
- [ ] Enter empty message
- [ ] Verify appropriate feedback

### 8.3 Backend Errors
- [ ] Simulate backend unavailability
- [ ] Verify graceful degradation
- [ ] Verify error messages are user-friendly

---

## Section 9: Browser Compatibility

### 9.1 Chrome/Edge
- [ ] Test all core functionality
- [ ] Verify PWA install works
- [ ] Verify no console errors

### 9.2 Firefox
- [ ] Test all core functionality
- [ ] Verify layout renders correctly
- [ ] Verify no console errors

### 9.3 Safari (if available)
- [ ] Test all core functionality
- [ ] Verify iOS standalone mode works
- [ ] Verify no console errors

---

## Section 10: Security

### 10.1 Content Security
- [ ] Verify no inline scripts in HTML
- [ ] Verify no eval() usage
- [ ] Verify HTTPS in production

### 10.2 Data Privacy
- [ ] Verify no sensitive data in localStorage
- [ ] Verify no PII logged to console
- [ ] Verify proper data sanitization

---

## Section 11: Regression Verification (Search Phone Module)

### 11.1 Public Number Override Logic
- [ ] Navigate to Home → Phone tab
- [ ] Enter public emergency number (e.g., "112")
- [ ] Verify risk_score = 0 (LOW)
- [ ] Verify entity name displays (e.g., "European Emergency Number")
- [ ] Verify region displays
- [ ] Verify explanation states "Official public emergency/institutional number – no fraud risk"
- [ ] Verify heuristic scoring did NOT execute (no heuristic indicators in result)

### 11.2 Phone Module Unchanged
- [ ] Verify phone lookup behavior matches previous version
- [ ] Verify no unintended changes to phone search UI
- [ ] Verify phone analysis results remain consistent with pre-patch behavior

---

## Final Sign-Off

- [ ] All sections completed without critical issues
- [ ] All acceptance criteria met
- [ ] No console errors or warnings
- [ ] Ready for production deployment

**Verified by:** _________________  
**Date:** _________________  
**Version:** _________________
