# hosnaqasmei.com

Personal site. Static Astro, Tailwind v4, one page, no JavaScript bundle.

## Requirements

Node **≥ 22.12** (Astro 7). There's an `.nvmrc` pinning 22:

```sh
nvm use
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `localhost:4321`               |
| `npm run build`   | Build to `./dist/`                           |
| `npm run preview` | Preview the built site locally               |
| `npm run deploy`  | Build and deploy to Cloudflare via Wrangler  |

## Editing content

Everything lives in three data files — no markup to touch:

- **`src/data/site.ts`** — name, title, location, the About paragraph, socials.
- **`src/data/work.ts`** — the Work list. `current: true` adds the "Current"
  chip; `link` makes the company name clickable.
- **`src/data/projects.ts`** — the Projects list.

Work and Projects each hide themselves when their list is empty. Both render
through the same `Row.astro`, so they stay visually consistent.

## Design

Two type roles: **Inter** for anything you read, **IBM Plex Mono** for the
small uppercase section labels, the chips and the year column (tabular figures,
so dates align). The label treatment lives in one place — the `label` utility
in `global.css`. Hairline rules separate rows instead of cards or shadows. The
slate-blue accent only appears on hover and focus.

Both themes are defined as custom properties in `src/styles/global.css` —
`:root` for light, `.dark` for dark. Style through the tokens
(`bg-background`, `text-muted-foreground`), not with `dark:` variants.

The theme follows the OS by default; the toggle in the header overrides it and
stores the choice in `localStorage`. A blocking inline script in
`Layout.astro` sets the class before first paint, so there's no flash.

## Deploying to Cloudflare

The build is fully static, so no Astro adapter is needed. Two options:

**Wrangler CLI** — `wrangler.jsonc` is set up to serve `./dist` as Workers
static assets:

```sh
npx wrangler login   # once
npm run deploy
```

**Git integration** — connect the repo in the Cloudflare dashboard with:

- Build command: `npm run build`
- Output directory: `dist`

Then point `hosnaqasmei.com` at the Worker/project in Cloudflare DNS.

## Notes

- Fonts are self-hosted through Astro's Fonts API — no request to Google at
  runtime.
- The only JavaScript is two small inline scripts for the theme toggle. Nothing
  is bundled; `dist/` contains no `.js` files.
- `src/assets/headshot.png` is optimized to a ~1 kB WebP at build time.
- `og:image` is not set. If you want link previews to show a card, add an image
  and wire it up in `src/layouts/Layout.astro`.
