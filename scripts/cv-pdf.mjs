// Prints the built /cv page to public/cv.pdf with headless Chrome.
// Run `pnpm cv:pdf`, which builds the site first. Set CHROME to use a different browser binary.

import { execFile } from "node:child_process";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = join(root, "dist");
const output = join(root, "public", "cv.pdf");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const types = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css",
    ".js": "text/javascript",
    ".svg": "image/svg+xml",
    ".avif": "image/avif",
    ".webp": "image/webp",
    ".jpg": "image/jpeg",
    ".png": "image/png",
};

// A small static server for dist/. With `build.format: "file"`, /cv is dist/cv.html.
const server = createServer(async (req, res) => {
    const path = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname));
    const file = join(dist, extname(path) ? path : `${path}.html`);
    try {
        const body = await readFile(file);
        res.writeHead(200, { "content-type": types[extname(file)] ?? "application/octet-stream" });
        res.end(body);
    } catch {
        res.writeHead(404).end();
    }
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

try {
    await promisify(execFile)(chrome, [
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        // Wait for the web fonts and the script that shows the email address.
        "--virtual-time-budget=10000",
        `--print-to-pdf=${output}`,
        `http://127.0.0.1:${port}/cv`,
    ]);
    console.log(`Wrote ${output}`);
} finally {
    server.close();
}
