import React from "react";
import { hydrateRoot } from "react-dom/client";
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client";
import { Layout } from "./components/Layout";
import "./tailwind.css";

export async function render(pageContext: PageContextBuiltInClient) {
    const { Page } = pageContext;
    hydrateRoot(
        document.getElementById("root")!,
        <Layout>
            <Page />
        </Layout>,
    );
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
