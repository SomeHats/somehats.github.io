import type { APIRoute, GetStaticPaths } from "astro";
import { iconFiles, type IconFile } from "../../lib/icons";

export const getStaticPaths = (async () =>
    Object.values(await iconFiles()).map((file) => ({
        params: { file: file.path.replace("/icons/", "") },
        props: { file },
    }))) satisfies GetStaticPaths;

export const GET: APIRoute<{ file: IconFile }> = ({ props }) =>
    new Response(props.file.body, { headers: { "Content-Type": props.file.contentType } });
