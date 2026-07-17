# Carli & Co — local website mockup

This is an editable, local-only website mockup for **Carli & Co Organic Hair & Beauty**. It is not connected to a `.chatgpt.site` deployment and contains no Sites hosting configuration.

## Open it in VS Code

1. Open this entire `Carli & Co` folder in VS Code.
2. Open the VS Code terminal.
3. Run `npm install` once.
4. Run `npm run dev`.
5. Visit `http://localhost:3000` in your browser.

The project uses standard Next.js, React, TypeScript and CSS. No page builder or hosted editor is required.

## Where to make changes

- `app/content.ts` — business details, navigation, opening hours and the complete service menu.
- `app/page.tsx` — homepage wording and sections.
- `app/services/page.tsx` — services page layout.
- `app/about/page.tsx` — about page.
- `app/gallery/page.tsx` — gallery and the clearly labelled client-review placeholder.
- `app/careers/page.tsx` — careers page.
- `app/contact/page.tsx` — contact page.
- `app/globals.css` — colours, type, spacing and all mobile/desktop styling.
- `public/images` — every photograph used by the mockup is saved locally here.

## Mobile design

The layout is mobile-first. On phones it includes a compact menu, horizontal service-category navigation, 48–52 px tap targets and a persistent booking button at the bottom of the screen. Desktop rules are added at wider breakpoints in `app/globals.css`.

## Content and image notes

The business information was restored from the existing Carli & Co pages and public listing, including the Claremont address, phone number, email, hours, AUD service prices, Quiet Chair services, careers copy and current Timely booking link.

The photographs currently in `public/images` are locally saved stock placeholders, not claimed as Carli & Co client work. Replace them with approved salon photography by keeping the same filenames, or change the image path in the relevant page. The gallery review area is intentionally labelled as a mockup note so no client testimonial is invented.

Reference pages:

- Existing website: https://sites.google.com/ccorganicsalon.com/carliandco
- Public business listing: https://worldguide.co.za/business/carli-co-organic-hair-beauty/
- Existing online booking: https://bookings.gettimely.com/carliandco/bb/book

## Useful commands

- `npm run dev` — preview locally while editing.
- `npm run build` — check that the production build succeeds.
- `npm test` — build and verify pages, business details, local images and the absence of the old hosting configuration.
