// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
    site: "https://alex.dytry.ch",
    // Keep the old URLs: /cv and /contact, with no trailing slash.
    trailingSlash: "never",
    build: { format: "file" },
});
