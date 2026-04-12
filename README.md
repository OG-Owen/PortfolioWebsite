# Owen Gray — Portfolio

> "The universe doesn't grant meaning — which is why I must build."

Live at: [og-owen.github.io/PortfolioWebsite](https://og-owen.github.io/PortfolioWebsite/)

---

## What this is

My personal portfolio — a corner of the internet that reflects how I actually think. The space theme isn't decorative noise; it's the honest backdrop for a worldview where meaning isn't handed down from somewhere, it's constructed. The site shows what I've been building, in code and in thought.

Projects are pulled live from GitHub at build time, so the portfolio stays current without manual upkeep. Pinned repos surface first, everything else follows by recency.

---

## Features

- Space-themed 3D visuals powered by Three.js and React Three Fiber
- Ice blue color palette — subtle, not garish
- Philosophy woven into the copy, not bolted on
- Auto-updating projects — fetched from GitHub at build time, pinned repos first
- Fully static output — deployed to GitHub Pages via GitHub Actions
- Nightly rebuild keeps project data fresh without any intervention

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (static export) |
| UI | React 19, Tailwind CSS |
| 3D | Three.js, React Three Fiber, Drei |
| Animation | Framer Motion |
| Icons | React Icons, Heroicons |
| Language | TypeScript |
| Deployment | GitHub Pages via GitHub Actions |
| Data | GitHub REST + GraphQL APIs |

---

## Local Development

**Prerequisites:** Node.js 20+, npm

```bash
# Install dependencies
npm install

# Populate GitHub project data (required before first build/dev run)
GH_PAT=your_token_here npm run fetch-github

# Start the dev server
npm run dev
```

The dev server runs at `http://localhost:3000`.

### GitHub Personal Access Token

`npm run fetch-github` requires a `GH_PAT` environment variable — a GitHub Personal Access Token with the following scopes:

- `public_repo`
- `read:user`

Generate one at [github.com/settings/tokens](https://github.com/settings/tokens). The token is only needed locally and in the repository secret for CI; it is never bundled into the build output.

---

## How the auto-update works

1. `scripts/fetch-github-data.mjs` calls the GitHub GraphQL API for pinned repos (preserving pin order) and the REST API for all other public repos.
2. It writes the combined list to `lib/github-data.json`, pinned repos first, the rest sorted by most recently pushed.
3. At build time, Next.js reads that file statically — no runtime API calls, no rate limits, no latency.
4. GitHub Actions runs the fetch + build pipeline on every push to `main` **and** on a nightly schedule (2 AM UTC), so the deployed site reflects new repos and activity without any manual step.

The workflow file lives at `.github/workflows/deploy.yml`. The `GH_PAT` secret is stored in the repository's Actions secrets.

---

## Attribution

This site is built on top of [space-portfolio](https://github.com/sanidhyy/space-portfolio) by [Sanidhya Kumar Verma](https://github.com/sanidhyy), licensed under [MIT](./LICENSE). The original template provided the Three.js scene, animation system, and component structure. Everything else — content, philosophy, color decisions, the GitHub data pipeline, and the deployment setup — is my own.

---

<!--- DEPENDENCIES_START --->
- [@heroicons/react](https://www.npmjs.com/package/@heroicons/react): ^2.2.0
- [@react-three/drei](https://www.npmjs.com/package/@react-three/drei): ^10.7.7
- [@react-three/fiber](https://www.npmjs.com/package/@react-three/fiber): ^9.5.0
- [@types/node](https://www.npmjs.com/package/@types/node): ^25
- [@types/react](https://www.npmjs.com/package/@types/react): 19.2.14
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): 19.2.3
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): ^10.4.27
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [eslint](https://www.npmjs.com/package/eslint): ^10.1.0
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 16.2.1
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^12.38.0
- [next](https://www.npmjs.com/package/next): 16.2.1
- [postcss](https://www.npmjs.com/package/postcss): ^8
- [react](https://www.npmjs.com/package/react): 19.2.4
- [react-dom](https://www.npmjs.com/package/react-dom): 19.2.4
- [react-icons](https://www.npmjs.com/package/react-icons): ^5.6.0
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer): ^10.0.3
- [tailwind-merge](https://www.npmjs.com/package/tailwind-merge): ^3.5.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): ^3.3.0
- [three](https://www.npmjs.com/package/three): ^0.183.2
- [typescript](https://www.npmjs.com/package/typescript): ^6

<!--- DEPENDENCIES_END --->

<!--- FOLDER_STRUCTURE_START --->
```bash
space-portfolio/
  |- app/
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- icon1.png
    |-- icon2.png
    |-- layout.tsx
    |-- page.tsx
  |- components/
    |-- main/
    |-- sub/
  |- config/
    |-- index.ts
  |- constants/
    |-- index.ts
  |- lib/
    |-- fonts.ts
    |-- github-data.json
    |-- motion.ts
    |-- types.ts
    |-- utils.ts
  |- public/
  |- scripts/
    |-- fetch-github-data.mjs
  |- .eslintrc.json
  |- .gitignore
  |- eslint.config.mjs
  |- netlify.toml
  |- next.config.js
  |- package-lock.json
  |- package.json
  |- postcss.config.js
  |- tailwind.config.ts
  |- tsconfig.json
```
<!--- FOLDER_STRUCTURE_END --->
