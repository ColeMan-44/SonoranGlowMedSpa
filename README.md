# Sonoran Glow Med Spa

A responsive demo website for Sonoran Glow Med Spa in Tucson, Arizona, built with HTML, CSS, JavaScript, and Vite.

## Run locally on Windows (no Git required)

1. Install **Node.js LTS** from [nodejs.org](https://nodejs.org/). Reopen your terminal after installing it. Node.js 24 is recommended and was used to validate this project.
2. Download the [main branch ZIP](https://github.com/ColeMan-44/SonoranGlowMedSpa/archive/refs/heads/main.zip), then choose **Extract All**. Do not run the site from inside the ZIP.
3. Open the extracted project folder. Make sure it contains both `package.json` and `package-lock.json`; sometimes extraction creates another folder inside the first one.
4. Right-click an empty area in that folder and choose **Open in Terminal**.
5. Run these commands in PowerShell:

   ```powershell
   npm.cmd ci
   npm.cmd run dev
   ```

6. Open the **Local** address printed in the terminal, usually **http://localhost:5173**. If that port is in use, Vite may print a different port.

Keep the terminal running while viewing the site. To stop the server, press **Ctrl+C**. If prompted with `Terminate batch job (Y/N)?`, type **Y** and press **Enter**.

To start it again later, open the same folder in Terminal and run `npm.cmd run dev`. You only need to install dependencies again after downloading an update or when dependencies change.

### Updating a ZIP download

Stop the server, download the latest main ZIP, and extract it into a new folder. Open that folder in Terminal and repeat `npm.cmd ci` and `npm.cmd run dev`. This avoids mixing an older copy with the update. Keep any local edits you want to preserve before replacing files.

### Common Windows errors

- **`npm.cmd` is not recognized:** Install Node.js LTS and reopen Terminal.
- **`npm ci` cannot find a lockfile:** Check that the terminal is in the extracted folder containing `package.json` and `package-lock.json`. Run `dir` to see the files. If either is missing, download and fully extract the ZIP again.
- **PowerShell blocks `npm.ps1`:** Use `npm.cmd` as shown above; changing the execution policy is unnecessary.
- **The page will not open:** Confirm that the server is still running and use the exact Local address printed in Terminal.

## Run locally with Git

With Git and Node.js installed:

```sh
git clone --branch main https://github.com/ColeMan-44/SonoranGlowMedSpa.git
cd SonoranGlowMedSpa
npm ci
npm run dev
```

On Windows PowerShell, use `npm.cmd` instead of `npm` if necessary. For an existing clean checkout, stop the server, run `git pull --ff-only`, then `npm ci` and `npm run dev`. Preserve any local changes before updating.

## Pages

- `/` — Homepage, first-visit guide, photo placeholders, sample testimonials, and FAQs.
- `/services.html` — Injectables, wellness, rejuvenation, and regenerative care with expandable treatment details.
- `/contact.html` — Contact information and the demo consultation form.
- `/team.html` — Kym Buchanan’s biography and a portrait placeholder.

All four pages are included in the production build through `vite.config.js`. The site can run locally or deploy to GitHub Pages. No cloud development environment publication is required.

## Build and preview

```sh
npm run build
npm run preview
```

The production files are generated in `dist/`. Open the Local address printed by the preview command, usually **http://localhost:4173**. On Windows, use `npm.cmd run build` and `npm.cmd run preview`.

Requires Node.js 20.19+ or 22.12+; Node.js 24 is recommended. Install dependencies with `npm ci` to use the committed lockfile.

## Demo content and limitations

- Consultation forms validate Name, Email, and Message locally. **Messages are not sent or saved.** No backend or email service is connected.
- Address, phone number, hours, Facebook, and Instagram links are placeholders. Call buttons use the placeholder telephone number.
- Testimonials are clearly labeled sample copy, not real reviews. Replace them with approved real reviews before launch.
- Photo placeholders are illustrations, not photographs of Kym or the studio.
- The first-time client **15% off** offer is demo content; confirm terms before launch.

The original SVG artwork is stored locally. Google Fonts supplies optional web fonts, with system font fallbacks. Scroll animations respect reduced-motion preferences. Service illustrations scroll naturally with the page, and the mobile Call / Consultation bar appears on all pages.

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` builds and deploys `main` automatically. Relative page and asset paths support the repository subfolder as well as local development.

One-time GitHub setup:

1. Open the repository’s **Settings → Pages**.
2. Under **Build and deployment**, select **GitHub Actions** as the source.
3. Open **Actions → Deploy to GitHub Pages**. If the initial run failed before Pages was enabled, rerun it or choose **Run workflow** on `main`.
4. After deployment succeeds, open `https://ColeMan-44.github.io/SonoranGlowMedSpa/`.

Every push to `main` publishes an update. Pushes to `dev` do not deploy. The published website includes all demo labels, placeholder contact details, and the local-only consultation form; GitHub Pages does not send form messages. Hosting availability depends on repository visibility and the GitHub account’s plan.
