import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import ssr from "vite-plugin-ssr/plugin";

export default defineConfig({
    plugins: [react(), ssr({ prerender: true })],
    base: "/",
    root: path.resolve(__dirname, "src"),
    publicDir: path.resolve(__dirname, "public"),
    build: {
        outDir: path.resolve(__dirname, "dist"),
        // rollupOptions: {
        //     output: {
        //         assetFileNames: "assets/asset_[name].[hash].[ext]",
        //         chunkFileNames: "assets/chunk_[name].[hash].js",
        //         entryFileNames: "assets/entry_[name].[hash].js",
        //     },
        // },
    },
});
