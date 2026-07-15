# Carli & Co. — Master Design System

## Direction

Editorial, tactile and quietly premium. Spacious asymmetric layouts, natural material colour, fine rules, confident serif headlines and unhurried interactions. Avoid generic beauty gradients, glossy card grids, excessive rounded corners and decorative animation.

## Palette

| Role | Name | Value |
| --- | --- | --- |
| Foundation | Bone | `#F3EEE5` |
| Primary | Dried Sage | `#7D876C` |
| Soft accent | Dusty Rose | `#C49A9C` |
| Action | Faded Rust | `#AF5D43` |
| Material accent | Warm Oak | `#A67C52` |
| Deep surface | Deep Sage | `#3F493B` |
| Text | Ink | `#262720` |

Use Bone as the dominant canvas, Deep Sage for immersive sections, and Faded Rust for primary actions. Dusty Rose and Warm Oak should remain supporting accents.

## Type

- Display: high-contrast editorial serif using `Iowan Old Style`, `Baskerville`, `Times New Roman`, serif.
- Body: clean humanist sans using `Avenir Next`, `Segoe UI`, sans-serif.
- Display scale: fluid `clamp()` sizes, tight line-height, italic emphasis for intimacy.
- Labels: small uppercase sans, tracked generously.

## Layout & interaction

- Maximum content width: 1440px with fluid gutters.
- Section rhythm: 96–160px desktop, 72–104px mobile.
- Cards use borders and colour contrast, not drop shadows.
- Tap targets are at least 44px. Focus states use Faded Rust with visible offset.
- Motion is limited to 200–600ms opacity/transform entrances and hover details. Respect `prefers-reduced-motion`.
- Images are editorial crops with consistent warm treatment and explicit dimensions to prevent layout shift.

## Breakpoints

- Mobile: 375px+
- Tablet: 768px+
- Desktop: 1024px+
- Wide: 1440px+
