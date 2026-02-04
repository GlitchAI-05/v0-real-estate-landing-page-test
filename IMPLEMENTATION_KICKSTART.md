# Cobalt Realty Landing Page - Implementation Kickstart

## Project Overview

**Client:** Cobalt Realty  
**Agent:** Tanya Bossof  
**Location:** Pretoria East, South Africa  
**Type:** Single-page real estate landing page with contact page  
**Framework:** Next.js 16 with Tailwind CSS v4

---

## Design System & Tokens

### Color Palette (5 Colors Maximum)

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `#FAFAF9` | Page background (warm off-white) |
| `--foreground` | `#1C1917` | Primary text (stone-900) |
| `--primary` | `#1D4ED8` | Cobalt blue accent (blue-700) |
| `--primary-foreground` | `#FFFFFF` | Text on primary buttons |
| `--muted` | `#F5F5F4` | Card backgrounds, sections |
| `--muted-foreground` | `#78716C` | Secondary text (stone-500) |
| `--border` | `#E7E5E4` | Borders, dividers (stone-200) |
| `--card` | `rgba(255, 255, 255, 0.7)` | Glass card background |
| `--card-foreground` | `#1C1917` | Card text |
| `--ring` | `#1D4ED8` | Focus rings (matches primary) |
| `--radius` | `0.75rem` | Border radius (12px) |

### Typography Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (Hero) | Geist | 48px / 3rem | 700 | 1.1 |
| H2 (Section) | Geist | 36px / 2.25rem | 600 | 1.2 |
| H3 (Card Title) | Geist | 24px / 1.5rem | 600 | 1.3 |
| Body Large | Geist | 18px / 1.125rem | 400 | 1.6 |
| Body | Geist | 16px / 1rem | 400 | 1.6 |
| Small/Caption | Geist | 14px / 0.875rem | 400 | 1.5 |
| Button | Geist | 16px / 1rem | 500 | 1 |

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| Section Padding | `py-20 lg:py-28` | Vertical section spacing |
| Container Max | `max-w-6xl` | Content width (1152px) |
| Card Gap | `gap-6` | Grid gap between cards |
| Element Gap | `gap-4` | Internal element spacing |

### Glass Effect Specification

```css
/* Glass Card */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
```

---

## File Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with Geist font, metadata
│   ├── page.tsx                # Landing page (imports sections)
│   ├── contact/
│   │   └── page.tsx            # Contact Tanya Bossof page
│   └── globals.css             # Design tokens & Tailwind config
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Navigation with mobile menu
│   │   ├── footer.tsx          # Footer with links & social
│   │   └── mobile-nav.tsx      # Mobile navigation drawer
│   ├── sections/
│   │   ├── hero.tsx            # Hero with headline & CTA
│   │   ├── trust-metrics.tsx   # Trust tiles (3 metrics)
│   │   ├── services.tsx        # Service feature cards
│   │   ├── testimonials.tsx    # Client testimonial cards
│   │   ├── about-agent.tsx     # Tanya Bossof showcase
│   │   ├── faq.tsx             # FAQ accordion
│   │   └── cta-banner.tsx      # Repeated CTA section
│   ├── ui/                     # shadcn/ui components (existing)
│   ├── valuation-modal.tsx     # Property valuation form modal
│   └── back-to-top.tsx         # Smooth scroll back to top
├── lib/
│   └── utils.ts                # Utility functions (existing)
└── public/
    └── images/
        ├── agent-placeholder.jpg    # Tanya headshot placeholder
        └── hero-placeholder.jpg     # Hero background placeholder
```

---

## Component Specifications

### 1. Header (`components/layout/header.tsx`)

**Desktop:**
- Logo: "Cobalt Realty" text logo (Geist Bold)
- Navigation: Home, Services, About, FAQ, Contact (smooth scroll anchors)
- CTA Button: "Get Free Valuation" (opens modal)
- Sticky on scroll with glass effect background

**Mobile:**
- Logo left, hamburger menu right
- Full-screen mobile nav overlay
- All navigation items + CTA

**Animations:**
- Header background opacity transitions on scroll
- Hamburger to X icon animation

---

### 2. Hero Section (`components/sections/hero.tsx`)

**Content:**
- Eyebrow: "Pretoria East Property Specialist"
- Headline: "Sell your home with confidence"
- Subheadline: "Local expertise. Honest guidance. Results that speak for themselves."
- Primary CTA: "Get a Free Valuation" (opens modal)
- Secondary link: "Meet Tanya" (scrolls to about section)

**Layout:**
- Full-width background (placeholder image with overlay)
- Centered text content
- Large headline with text-balance

**Animations:**
- Fade-in on load
- Subtle parallax on background (optional)

---

### 3. Trust Metrics (`components/sections/trust-metrics.tsx`)

**Metrics (3 tiles):**
1. "21 Days" - Average time to first serious enquiry
2. "97%" - Asking price achieved on average
3. "150+" - Properties sold in Pretoria East

**Layout:**
- 3-column grid (stacks on mobile)
- Glass effect cards
- Large number with supporting text below

**Animations:**
- Fade-up on scroll into view
- Number count-up animation (optional enhancement)

---

### 4. Services Section (`components/sections/services.tsx`)

**Services (4 cards):**
1. **Market Analysis** - Accurate pricing based on local market data
2. **Professional Marketing** - Photography, staging advice, and listing optimization
3. **Negotiation** - Expert negotiation to maximize your sale price
4. **End-to-End Support** - From listing to transfer, we handle everything

**Layout:**
- 2x2 grid (stacks to 1 column on mobile)
- Glass effect cards with icon, title, description

**Animations:**
- Staggered fade-up on scroll

---

### 5. Testimonials (`components/sections/testimonials.tsx`)

**Testimonials (3 cards):**
1. "Tanya made selling our family home stress-free. Her market knowledge is unmatched." - Johan & Marie V., Faerie Glen
2. "Professional, responsive, and achieved above asking price. Highly recommend." - Pieter S., Moreleta Park
3. "We were nervous first-time sellers. Tanya guided us every step of the way." - Lerato M., Waterkloof

**Layout:**
- 3-column grid (stacks on mobile)
- Glass effect cards with quote, attribution
- Optional star rating display

**Animations:**
- Fade-in on scroll

---

### 6. About Agent (`components/sections/about-agent.tsx`)

**Content:**
- Section title: "Meet Your Agent"
- Agent name: "Tanya Bossof"
- Title: "Principal Agent, Cobalt Realty"
- Bio: 2-3 sentences about experience and approach
- Contact info: Phone, Email
- CTA: "Contact Tanya" (links to /contact)
- Placeholder headshot image

**Layout:**
- Two-column: Image left, content right
- Reverses on mobile (content first)

**Animations:**
- Fade-in on scroll

---

### 7. FAQ Section (`components/sections/faq.tsx`)

**Questions (5 items):**
1. How do you determine the value of my property?
2. What costs are involved in selling?
3. How long does the selling process take?
4. Do you handle all the paperwork?
5. What areas do you cover?

**Layout:**
- Accordion component (shadcn/ui)
- Full-width within container

**Animations:**
- Smooth expand/collapse

---

### 8. CTA Banner (`components/sections/cta-banner.tsx`)

**Content:**
- Headline: "Ready to sell your property?"
- Subtext: "Get a free, no-obligation property valuation today."
- CTA Button: "Get Your Free Valuation" (opens modal)

**Layout:**
- Full-width section with accent background
- Centered content

**Placement:**
- After Services section
- After Testimonials section
- Before Footer

---

### 9. Valuation Modal (`components/valuation-modal.tsx`)

**Form Fields:**
- Full Name (required)
- Email (required)
- Phone Number (required)
- Property Address / Suburb (required)
- Additional Notes (optional textarea)

**Behavior:**
- Opens on CTA click
- Form validation (inline errors)
- Submit shows success message
- Close on backdrop click or X button
- No backend - mock success state

**Animations:**
- Fade + scale in
- Smooth close

---

### 10. Footer (`components/layout/footer.tsx`)

**Content:**
- Logo: "Cobalt Realty"
- Navigation links
- Contact info: Phone, Email, Address
- Social links: LinkedIn, Instagram (placeholder URLs)
- Office hours: Mon-Fri 8am-5pm, Sat 9am-1pm
- Copyright: 2026 Cobalt Realty

**Layout:**
- Multi-column grid
- Stacks on mobile

---

### 11. Contact Page (`app/contact/page.tsx`)

**Content:**
- Page title: "Contact Tanya Bossof"
- Agent photo + brief intro
- Contact methods: Phone (with WhatsApp link), Email
- Office address
- Office hours
- Map placeholder
- Back to home link

**Layout:**
- Clean, simple page
- No form (direct contact methods)

---

### 12. Back to Top (`components/back-to-top.tsx`)

**Behavior:**
- Appears after scrolling 400px
- Smooth scroll to top on click
- Fixed position bottom-right

**Animations:**
- Fade in/out
- Hover scale

---

## Animation Specifications

### Scroll-Based Animations

Using CSS `@keyframes` and Intersection Observer:

```css
/* Fade Up */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

### Hover Effects

- **Buttons:** Scale 1.02, subtle shadow increase
- **Cards:** Translate Y -4px, shadow increase
- **Links:** Underline animation or color transition

### Transitions

- All transitions: `transition-all duration-300 ease-out`
- Modal transitions: `duration-200`

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked sections, mobile nav |
| Tablet | 640px - 1024px | 2-column grids, adjusted spacing |
| Desktop | > 1024px | Full layout, 3-column grids where applicable |

---

## SEO Structure

### Page Metadata (`app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "Cobalt Realty | Pretoria East Property Specialist",
  description: "Sell your home with confidence. Expert real estate services in Pretoria East with Tanya Bossof. Free property valuations available.",
  keywords: ["Pretoria East real estate", "property for sale", "estate agent Pretoria", "Tanya Bossof", "Cobalt Realty"],
  openGraph: {
    title: "Cobalt Realty | Pretoria East Property Specialist",
    description: "Sell your home with confidence. Expert real estate services in Pretoria East.",
    type: "website",
    locale: "en_ZA",
  },
};
```

### Semantic HTML Structure

- `<header>` - Navigation
- `<main>` - Page content
- `<section>` - Each content section with `id` for anchors
- `<footer>` - Footer content
- Proper heading hierarchy (H1 > H2 > H3)
- Alt text on all images

---

## Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with design tokens
2. Update `layout.tsx` with Geist font and metadata
3. Create header component with mobile navigation
4. Create footer component

### Phase 2: Landing Page Sections
5. Build hero section
6. Build trust metrics section
7. Build services section
8. Build first CTA banner

### Phase 3: Social Proof & About
9. Build testimonials section
10. Build about agent section
11. Build second CTA banner

### Phase 4: FAQ & Modal
12. Build FAQ accordion section
13. Build valuation modal
14. Build third CTA banner (pre-footer)

### Phase 5: Finishing Touches
15. Build back-to-top component
16. Build contact page
17. Generate placeholder images
18. Final responsive testing

---

## Placeholder Content Notes

All content (testimonials, FAQ answers, metrics) is prototype content and will be replaced with final copy. Images will be replaced with professional photography when available.

---

## Dependencies

Using existing shadcn/ui components:
- Button
- Card
- Dialog (for modal)
- Accordion (for FAQ)
- Input
- Label
- Textarea

Additional packages (if needed):
- `lucide-react` - Icons (likely already included)

---

## CTA Placement Summary

1. **Header** - "Get Free Valuation" button
2. **Hero** - Primary CTA button
3. **After Services** - CTA Banner
4. **After Testimonials** - CTA Banner
5. **Before Footer** - CTA Banner

Total: 5 CTA touchpoints (minimum 3 as requested)

---

*Document created: February 2026*  
*Ready for implementation approval*
