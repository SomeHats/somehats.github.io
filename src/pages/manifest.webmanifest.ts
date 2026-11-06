import type { APIRoute } from "astro";
import { iconFiles, TILE_COLOUR } from "../lib/icons";

// The manifest keeps a fixed URL. It links to the hashed icon files, so it changes when they do.
export const GET: APIRoute = async () => {
    const icons = await iconFiles();
    return Response.json({
        name: "Alex Dytrych",
        short_name: "Alex",
        start_url: "/",
        display: "browser",
        theme_color: TILE_COLOUR,
        background_color: "#ffffff",
        icons: [
            { src: icons["icon-192"].path, sizes: "192x192", type: "image/png" },
            { src: icons["icon-512"].path, sizes: "512x512", type: "image/png" },
            {
                src: icons["icon-maskable-512"].path,
                sizes: "512x512",
                type: "image/png",
                purpose: "maskable",
            },
        ],
    });
};
