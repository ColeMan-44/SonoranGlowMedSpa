# Sonoran Glow Med Spa

A responsive homepage for Sonoran Glow Med Spa in Tucson, Arizona. Built with HTML, CSS, JavaScript, and Vite. Requires Node.js 20.19+ or 22.12+ (validated with Node.js 24).

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`; serve that build with `npm run preview`.

The site includes a mobile navigation menu and a consultation information dialog. Booking is not connected: add verified contact details or a scheduling provider before launch. No appointment information is collected. The desert landscape, botanical portrait, treatment illustrations, spa still life, and favicon are original local SVGs. Scroll reveals respect reduced-motion preferences. Google Fonts supplies the optional web fonts; system serif and sans-serif fonts are used as fallbacks.

## Services

Open `/services.html` for injectables, wellness, rejuvenation, and regenerative care. Homepage treatment cards link to the relevant category. Treatment details use native, keyboard-accessible expandable panels. The production build includes both HTML pages through `vite.config.js`. All service artwork is local SVG.

## Contact and team

`/contact.html` includes a name, email, and message form. The same demo form opens from the homepage and Services consultation buttons. Submission validates fields locally and explicitly states that no message was sent; no backend, email service, or data storage is connected. `/team.html` features Kym’s supplied biography and a labeled portrait placeholder. Address, phone, hours, Facebook, and Instagram are placeholders; replace them before launch. The 15% first-visit banner links to the placeholder telephone number.
