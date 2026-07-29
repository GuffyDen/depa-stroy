# ДеПа Строй — Design System

Generated from the `ui-ux-pro-max` recommendation and refined against the
approved brand brief.

**Style:** Exaggerated Minimalism

**Pattern:** Portfolio + Hero-Centric

**Dials:** Variance 7/10 · Motion 4/10 · Density 2/10

## Product intent

- Present a premium residential brand before presenting a renovation service.
- Sell quality of life, architectural value, calm, and ownership.
- Keep the experience closer to an architecture portfolio than a contractor
  landing page.

## Global tokens

| Role | Value |
| --- | --- |
| Paper | `#F2EEE6` |
| Deep paper | `#E7E0D5` |
| Sand | `#D3C5B3` |
| Ink | `#191A17` |
| Graphite | `#22231F` |
| Deep graphite | `#171814` |
| Muted text | `#696A63` |
| Brass accent | `#A98755` |
| Dark divider | `rgba(25, 26, 23, 0.18)` |
| Light divider | `rgba(242, 238, 230, 0.20)` |

Brass is reserved for indices, focus, active states, and small directional
marks. It must never become a dominant surface color.

## Typography

- Modern grotesk only; no serif, script, or decorative italic.
- Display: `Avenir Next`, `Helvetica Neue`, Helvetica, Arial, sans-serif.
- UI/body: `Helvetica Neue`, Helvetica, Arial, sans-serif.
- Display weight: 400; UI weight: 300–500.
- Headline tracking: `-0.04em` to `-0.085em`.
- Body copy remains at least 13px on desktop and 14px on mobile.

## Layout

- Asymmetric editorial grids with wide negative space.
- Adaptive gutters: 20–84px.
- Section rhythm: 112–220px.
- Hero uses a strict text/image split. Never place copy over the photograph.
- Imagery is large, quiet, and architectural. Supporting copy stays short.

## Components

- Buttons are rectangular, at least 44px high, and use no radius.
- Cards are expressed through spacing and dividers, not boxed surfaces.
- Inputs use visible labels and one-pixel rules; focused fields receive a brass
  underline.
- No gradients, glass effects, heavy shadows, pills, or decorative construction
  imagery.

## Motion

- UI transitions: 150–300ms.
- Grouped scroll reveals: 620ms maximum.
- Use ease-out for entry and avoid continuous decorative animation.
- Respect `prefers-reduced-motion`.

## Accessibility and responsive

- Normal text contrast: WCAG AA.
- Visible keyboard focus on every interactive element.
- Touch targets: at least 44×44px.
- Test at 375px, 812px landscape, 1280px, and 1440px.
- No horizontal scrolling.
- Mobile contact order: form first, project leads second.

## Anti-patterns

- Serif “luxury” clichés.
- Rounded cards and app-like bento layouts.
- Bright white blocks or saturated accent colors.
- Generic construction-company sections.
- Excessive copy, decorative icons, and hover-only information.
