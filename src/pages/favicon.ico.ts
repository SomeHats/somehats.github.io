import type { APIRoute } from "astro";
import { iconIco, ROUNDED } from "../lib/icons";

// Browsers request /favicon.ico even when the page names another icon, so it must exist at this path.
export const GET: APIRoute = async () =>
    new Response(await iconIco(ROUNDED, [16, 32, 48]), {
        headers: { "Content-Type": "image/x-icon" },
    });
