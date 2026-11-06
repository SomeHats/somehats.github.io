/**
 * The site icon: the fallen-leaf emoji on a lavender tile. Every icon file is
 * generated from src/assets/icons/fallen-leaf.svg at build time.
 */
import sharp from "sharp";
import leafSource from "../assets/icons/fallen-leaf.svg?raw";

/** The site's --primary-lightest, also used for theme-color. */
export const TILE_COLOUR = "#ebe0fb";

export interface IconShape {
    /** Corner radius, as a percentage of the width. 0 for platforms that apply their own mask. */
    radius: number;
    /** The leaf's width, as a fraction of the tile's width. */
    scale: number;
}

/** The standard icon: a rounded tile. */
export const ROUNDED: IconShape = { radius: 22, scale: 0.78 };
/** Full square, for iOS, which rounds the corners itself. */
export const SQUARE: IconShape = { radius: 0, scale: 0.78 };
/** Full square with the leaf inside the central 80% circle that Android keeps when it masks. */
export const MASKABLE: IconShape = { radius: 0, scale: 0.56 };

const leafViewBox = leafSource.match(/viewBox="([^"]+)"/)?.[1];
const leafBody = leafSource.match(/<svg[^>]*>([\s\S]*)<\/svg>/)?.[1];
if (!leafViewBox || !leafBody)
    throw new Error("fallen-leaf.svg: could not find the viewBox or the SVG body");

export function iconSvg({ radius, scale }: IconShape): string {
    const size = scale * 100;
    const offset = (100 - size) / 2;
    return [
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">',
        `<rect width="100" height="100" rx="${radius}" fill="${TILE_COLOUR}"/>`,
        `<svg x="${offset}" y="${offset}" width="${size}" height="${size}" viewBox="${leafViewBox}">${leafBody}</svg>`,
        "</svg>",
    ].join("");
}

export async function iconPng(shape: IconShape, size: number): Promise<Uint8Array<ArrayBuffer>> {
    // The SVG is 100 units wide (100px at 72 DPI). Render at 4x the target size, then scale down.
    const density = (72 * size * 4) / 100;
    const png = await sharp(new TextEncoder().encode(iconSvg(shape)), { density })
        .resize(size, size)
        .png()
        .toBuffer();
    return new Uint8Array(png);
}

/** An .ico file that contains PNG images, one for each size. */
export async function iconIco(shape: IconShape, sizes: number[]): Promise<Uint8Array<ArrayBuffer>> {
    const images = await Promise.all(sizes.map((size) => iconPng(shape, size)));
    const headerSize = 6 + 16 * images.length;
    const ico = new Uint8Array(headerSize + images.reduce((total, png) => total + png.length, 0));
    const view = new DataView(ico.buffer);
    view.setUint16(2, 1, true); // type: icon
    view.setUint16(4, images.length, true);
    let offset = headerSize;
    images.forEach((png, i) => {
        const entry = 6 + 16 * i;
        const size = sizes[i]!;
        view.setUint8(entry, size >= 256 ? 0 : size); // width (0 means 256)
        view.setUint8(entry + 1, size >= 256 ? 0 : size); // height
        view.setUint16(entry + 4, 1, true); // colour planes
        view.setUint16(entry + 6, 32, true); // bits per pixel
        view.setUint32(entry + 8, png.length, true);
        view.setUint32(entry + 12, offset, true);
        ico.set(png, offset);
        offset += png.length;
    });
    return ico;
}

export type IconName = "icon" | "apple-touch-icon" | "icon-192" | "icon-512" | "icon-maskable-512";

export interface IconFile {
    /** Public URL, with a hash of the content, for example /icons/icon-192.3fa1c09e2b.png. */
    path: string;
    contentType: string;
    body: Uint8Array<ArrayBuffer>;
}

const iconDefinitions: Record<IconName, () => Promise<Omit<IconFile, "path"> & { ext: string }>> = {
    icon: async () => ({
        ext: "svg",
        contentType: "image/svg+xml",
        body: new TextEncoder().encode(iconSvg(ROUNDED)),
    }),
    "apple-touch-icon": async () => ({
        ext: "png",
        contentType: "image/png",
        body: await iconPng(SQUARE, 180),
    }),
    "icon-192": async () => ({
        ext: "png",
        contentType: "image/png",
        body: await iconPng(ROUNDED, 192),
    }),
    "icon-512": async () => ({
        ext: "png",
        contentType: "image/png",
        body: await iconPng(ROUNDED, 512),
    }),
    "icon-maskable-512": async () => ({
        ext: "png",
        contentType: "image/png",
        body: await iconPng(MASKABLE, 512),
    }),
};

let iconFilesPromise: Promise<Record<IconName, IconFile>> | undefined;

/**
 * Renders every icon once, and names each file with a hash of its content, so that the files
 * can be cached forever (see the /icons/* rule in public/_headers). The endpoint that writes
 * the files and the pages that link to them both use this, so the names always match.
 */
export function iconFiles(): Promise<Record<IconName, IconFile>> {
    iconFilesPromise ??= (async () => {
        const entries = await Promise.all(
            (Object.keys(iconDefinitions) as IconName[]).map(async (name) => {
                const { ext, contentType, body } = await iconDefinitions[name]();
                const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", body));
                const hash = Array.from(digest.slice(0, 5), (b) =>
                    b.toString(16).padStart(2, "0"),
                ).join("");
                return [
                    name,
                    { path: `/icons/${name}.${hash}.${ext}`, contentType, body },
                ] as const;
            }),
        );
        return Object.fromEntries(entries) as Record<IconName, IconFile>;
    })();
    return iconFilesPromise;
}
