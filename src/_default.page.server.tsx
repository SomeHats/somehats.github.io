import ReactDOMServer from "react-dom/server";
import React from "react";
import { dangerouslySkipEscape } from "vite-plugin-ssr";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
import { PageShell } from "./PageShell";
import { Helmet } from "react-helmet";

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "urlPathname"];

export async function render(pageContext: PageContextBuiltIn) {
    const { Page } = pageContext;
    const pageHtml = ReactDOMServer.renderToString(
        <PageShell>
            <Page />
        </PageShell>,
    );
    const headContents = Helmet.renderStatic();

    const document = (
        <html {...headContents.htmlAttributes.toComponent()}>
            <head>
                {headContents.meta.toComponent()}
                {headContents.title.toComponent()}
                {headContents.link.toComponent()}
            </head>
            <body {...headContents.bodyAttributes.toComponent()}>
                <div id="root" dangerouslySetInnerHTML={{ __html: pageHtml }}></div>
            </body>
        </html>
    );

    const documentHtml = `<!doctype html>${ReactDOMServer.renderToStaticMarkup(document)}`;

    return {
        documentHtml: dangerouslySkipEscape(documentHtml),
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    };
}
