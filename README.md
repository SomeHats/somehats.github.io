# alex.dytry.ch

Static [Astro](https://astro.build) site, served by a Cloudflare Worker with static assets.

```sh
pnpm install
pnpm dev       # Astro dev server
pnpm preview   # build, then serve the built site locally with wrangler
pnpm check     # type-check, including .astro files
pnpm cv:pdf    # build, then print /cv to public/cv.pdf with headless Chrome
pnpm deploy    # check, build and deploy with wrangler
```

## Other repos on this domain

`/toys/*` and `/tentacles/*` come from the [toys](https://github.com/SomeHats/toys) and
[tentacles](https://github.com/SomeHats/tentacles) repos. Each deploys its own Worker on a route
(`alex.dytry.ch/toys/*`, `alex.dytry.ch/tentacles/*`), and routes run before this site's custom
domain. `public/_redirects` adds the trailing slash to `/toys` and `/tentacles`.

## Licences

The site icon is the "fallen leaf" emoji from
[Noto Emoji](https://github.com/googlefonts/noto-emoji), recoloured. It is under the Apache License
2.0: see `LICENSES/Apache-2.0.txt` and the notice in `src/assets/icons/fallen-leaf.svg`.
