# Mobile-First Web App Checklist

## Phase 1 — Discovery & Scoping

### Define the app
- [ ] Write a one-sentence description of what the app does *(if you can't do this, scope is too vague)*
- [ ] List the 3–5 core user actions (not features — actions)
- [ ] Define who the primary user is and what device they'll use most
- [ ] Set a hard scope limit: what will NOT be in v1

### Technical decisions
- [ ] Choose your stack (framework, backend, auth, DB)
- [ ] Decide: PWA, native wrapper, or pure web?
- [ ] Pick your component library (shadcn, DaisyUI, etc.)
- [ ] Set up your repo, CI, and deployment target

---

## Phase 2 — Mobile-First Design

### Visual system (do these once, reuse everywhere)
- [ ] Choose a color palette (2–3 colors max for v1)
- [ ] Pick a font pairing and set a type scale
- [ ] Define spacing units (e.g. 4px base scale)
- [ ] Choose an icon set (Lucide, Heroicons, etc.)

### Mobile layout rules
- [ ] Set base font size ≥ 16px (prevents iOS auto-zoom)
- [ ] Minimum tap target size: 44×44px for all interactive elements
- [ ] Design for 375px viewport width as your baseline
- [ ] Decide: bottom nav or hamburger menu for primary navigation?
- [ ] Sketch the 3–5 core screens at mobile size first (paper is fine)

---

## Phase 3 — Build (Mobile-First Order)

### Foundation
- [ ] Set up CSS reset and base styles
- [ ] Implement your design tokens (colors, type, spacing as CSS vars)
- [ ] Build and test your layout shell on a real phone or DevTools mobile mode
- [ ] Implement navigation (bottom bar or drawer)

### Core screens — mobile first
- [ ] Build each screen at 375px, no media queries yet
- [ ] Test every screen in DevTools: iPhone SE, iPhone 14, Pixel 5
- [ ] Check all tap targets are ≥ 44px
- [ ] Verify no horizontal scroll at 320px
- [ ] Add tablet breakpoint (768px) if needed
- [ ] Add desktop breakpoint (1024px+) if needed

### Functionality
- [ ] Wire up your 3–5 core user actions end-to-end
- [ ] Add loading states for all async operations
- [ ] Add empty states for all data-driven views
- [ ] Add error states and user-facing error messages

---

## Phase 4 — Mobile-Specific Polish

### Touch & input
- [ ] Use correct input types (email, tel, number, date) for mobile keyboards
- [ ] Test form UX when keyboard pushes viewport up
- [ ] Disable double-tap-to-zoom if appropriate (`touch-action: manipulation`)
- [ ] Test scroll behavior — no scroll-inside-scroll traps

### Performance
- [ ] Lazy-load images and heavy components
- [ ] Run Lighthouse on mobile — target ≥ 90 performance
- [ ] Check bundle size — keep initial JS under 200KB gzipped
- [ ] Test on a throttled connection (DevTools: Slow 4G)

### Viewport & meta
- [ ] Add `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Set theme-color meta tag to match your brand
- [ ] Add apple-touch-icon and favicon
- [ ] Test in both portrait and landscape orientation

---

## Phase 5 — QA & Accessibility

### Cross-device testing
- [ ] Test on a real iOS device (Safari behaves differently)
- [ ] Test on a real Android device
- [ ] Test in Chrome, Safari, and Firefox
- [ ] Test with browser zoom at 150% and 200%

### Accessibility
- [ ] All images have meaningful alt text
- [ ] Color contrast ≥ 4.5:1 for body text, ≥ 3:1 for large text
- [ ] App is navigable by keyboard alone
- [ ] Run axe DevTools or Lighthouse accessibility audit
- [ ] Test with VoiceOver (iOS) or TalkBack (Android)

---

## Phase 6 — Launch Prep

### Pre-launch
- [ ] Set up error monitoring (Sentry or similar)
- [ ] Set up basic analytics
- [ ] Write a robots.txt and sitemap if SEO matters
- [ ] Add a simple privacy policy if collecting any data
- [ ] Check all environment variables are set in production

### Deploy
- [ ] Deploy to production and smoke-test on a real phone
- [ ] Test the real production URL — not localhost
- [ ] Share with 2–3 people and watch them use it (usability test)
- [ ] Write down the top 3 things to fix in v1.1