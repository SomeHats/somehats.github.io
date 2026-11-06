# alex.dytry.ch

Static [Astro](https://astro.build) site, served by a Cloudflare Worker with static assets.

```sh
pnpm install
pnpm dev       # Astro dev server (no /toys or /tentacles proxy)
pnpm preview   # build, then run the full Worker locally with wrangler
pnpm check     # type-check the Worker
pnpm deploy    # build and deploy with wrangler
```

## Other repos on this domain

`/toys/*` and `/tentacles/*` come from other repos. `worker/index.ts` proxies them to their Netlify
deployments. All other paths are static files from `dist/`, and the Worker does not run for them
(see `run_worker_first` in `wrangler.jsonc`).
