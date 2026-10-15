# Harshit Vautre: Portfolio

Personal portfolio built with Next.js (App Router), TypeScript and Tailwind CSS v4.
Single page, fully static, no backend, no database and no paid services. It deploys on Vercel's free Hobby plan.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint       # ESLint
npm run build      # production build (what Vercel runs)
```

## Update your details

All personal content lives in **`src/config/site.ts`**: name, headline, bio, email, LinkedIn, GitHub,
projects, experience, education and interests. Components read from this file, so nothing else needs editing.

- **Contact links:** `site.contact`
- **Project links:** `projects[].links`. Leave the array empty and the card shows "Case study · not publicly hosted".
- **Experience dates:** `experience[].period`. Set it to `""` to hide it.

Design tokens (colours, fonts, radii, motion) are at the top of `src/app/globals.css`.

## Project structure

```
src/
  app/
    layout.tsx            fonts + SEO metadata
    page.tsx              section order
    globals.css           design tokens + shared component styles
    icon.svg              favicon (HV monogram)
    opengraph-image.tsx   social preview image, generated at build time
    robots.ts, sitemap.ts
  components/             Hero, About, Work, Experience, Interests, Contact, Nav, Footer, Ribbon …
  config/site.ts          ← all your content
```

## Push to GitHub

```bash
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Hxrsshit/<repo-name>.git
git push -u origin main
```

Create the empty repository on GitHub first (no README, so there is nothing to merge).

## Deploy to Vercel (free)

1. Sign in at https://vercel.com with your GitHub account (Hobby plan).
2. **Add New → Project**, then import the repository.
3. Vercel detects Next.js automatically. Keep the defaults and click **Deploy**.
4. Every push to `main` redeploys automatically.

No environment variables are required. SEO / Open Graph URLs use your Vercel production domain automatically.
If you later want to pin a specific URL, set `NEXT_PUBLIC_SITE_URL` (for example `https://harshitvautre.com`) in
**Project → Settings → Environment Variables**.

## Custom domain (optional, later)

1. Buy a domain from any registrar.
2. In Vercel: **Project → Settings → Domains → Add**, then enter the domain.
3. Add the DNS records Vercel shows at your registrar (usually an `A` record for the apex domain and a `CNAME` for `www`).
4. HTTPS is issued automatically once DNS propagates.
5. Optionally set `NEXT_PUBLIC_SITE_URL` to the new domain and redeploy.
