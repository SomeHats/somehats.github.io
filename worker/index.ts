/**
 * Proxies the paths that other repos deploy.
 *
 * The upstream apps serve their files from "/", but their HTML uses absolute links
 * that include the prefix (for example "/toys/static/..."). So we remove the prefix
 * before the request goes upstream, and add it again to any redirect that comes back.
 *
 * When an app moves to its own Worker, remove it from this list and from
 * `run_worker_first` in wrangler.jsonc. Then add a route for it on that Worker.
 */
const UPSTREAMS: Record<string, string> = {
    "/toys": "https://alex-toys.netlify.app",
    "/tentacles": "https://alex-tentacles.netlify.app",
};

export default {
    async fetch(request, env): Promise<Response> {
        const url = new URL(request.url);

        for (const [prefix, origin] of Object.entries(UPSTREAMS)) {
            if (url.pathname === prefix) {
                // The upstream pages use relative links, so they need the trailing slash.
                url.pathname = `${prefix}/`;
                return Response.redirect(url.toString(), 301);
            }
            if (url.pathname.startsWith(`${prefix}/`)) {
                return proxy(request, url, prefix, origin);
            }
        }

        return env.ASSETS.fetch(request);
    },
} satisfies ExportedHandler<Env>;

async function proxy(request: Request, url: URL, prefix: string, origin: string) {
    const upstreamUrl = new URL(url.pathname.slice(prefix.length) + url.search, origin);
    const response = await fetch(new Request(upstreamUrl, request), { redirect: "manual" });

    const location = response.headers.get("Location");
    if (!location) return response;

    // Change upstream redirects back into paths on this site.
    const target = new URL(location, upstreamUrl);
    if (target.origin !== new URL(origin).origin) return response;

    const headers = new Headers(response.headers);
    headers.set("Location", prefix + target.pathname + target.search + target.hash);
    return new Response(response.body, { status: response.status, headers });
}
