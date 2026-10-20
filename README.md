# Mansy Tours

Egypt travel website — handcrafted tours, private guides and curated experiences from the pyramids of Giza to the Red Sea reefs.

Built with **Next.js 16**, **React 19**, **Tailwind CSS 4** and **Turbopack**.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. The pages update automatically as you edit `src/app/**`.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Export the static site to `out/` |
| `npm run lint` | Run ESLint |

> The project uses `output: "export"`, so it builds to plain static files in `out/`. There is no Node server to start — serve the `out/` folder with any static host.

## Deploy to GitHub Pages (recommended)

The site is hosted on GitHub Pages at:

```
https://abdelrahmanmansy.github.io/mansy-tours/
```

### First-time setup (one time)

1. In the GitHub repo, go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, choose **GitHub Actions**.
3. Push the code. The workflow in `.github/workflows/deploy.yml` builds the site and publishes it automatically.

### How it works

- Every push to `master` triggers the workflow.
- The build runs `DEPLOY_TARGET=github npm run build`, which exports the site with the `/mansy-tours/` base path.
- The workflow uploads `out/` and deploys it through `actions/deploy-pages`.

### Local preview of the production build

```bash
DEPLOY_TARGET=github npm run build
npx serve out
```

Then open the printed URL. This mirrors exactly what GitHub Pages will serve.

### Custom domain

1. In the GitHub repo, go to **Settings** → **Pages** and add the custom domain.
2. Point the domain's DNS at GitHub Pages (an `A` record to the Pages IPs, or a `CNAME` to `abdelrahmanmansy.github.io`).
3. Add a `CNAME` file to `public/` containing the domain so the base path and links stay correct.

## Deploy to Vercel (alternative)

If you prefer Vercel, the repo also works there. Import `abdelrahmanmansy/mansy-tours` at [vercel.com/new](https://vercel.com/new) and deploy. Vercel serves the site from the root, so it does not need the GitHub Pages base path.

## Notes

- The site is fully static — no database or server-side secrets are required.
- Google Fonts (`Fraunces`, `Manrope`) are fetched at build time, so the build host needs internet access.
- `next.config.ts` enables the `/mansy-tours` base path only when `DEPLOY_TARGET=github` is set, so the same code works on GitHub Pages and Vercel.
