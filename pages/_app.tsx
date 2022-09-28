import { media, textColor, primary } from "../lib/styles";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from "next/head";
import { ThemeName, ThemeProvider } from "../lib/Themes";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { RefObject, useEffect, useState } from "react";

function getThemeForPath(path: string) {
    // if (path === "/") {
    //     return ThemeName.Dark;
    // }
    return ThemeName.Light;
}

function MyApp({ Component, pageProps, router }: AppProps) {
    const [refs] = useState(() => {
        const refs: Record<string, RefObject<HTMLElement | undefined>> = {};
        return {
            refs,
            getRef: (name: string) => {
                if (!(name in refs)) {
                    refs[name] = { current: undefined };
                }
                return refs[name];
            },
        };
    });
    useEffect(() => {
        console.log("mount MyApp");
        return () => console.log("unmount MyApp");
    }, []);
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <ThemeProvider theme={getThemeForPath(router.asPath)}>
                <Layout>
                    <TransitionGroup className="page-transition">
                        <CSSTransition
                            key={router.asPath}
                            nodeRef={refs.getRef(router.asPath)}
                            classNames="page"
                            timeout={{ enter: 400, exit: 300 }}
                        >
                            <div ref={refs.getRef(router.asPath) as RefObject<HTMLDivElement>}>
                                <Component {...pageProps} />
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                </Layout>
            </ThemeProvider>
            <style jsx global>{`
                html,
                body {
                    font-size: 18px;
                }
                body {
                    font-family: "Montserrat", sans-serif;
                    font-weight: 400;
                    font-size: 100%;
                    line-height: 1.7;
                    background: ${primary};
                    color: ${textColor};
                }
                @media print {
                    body {
                        background: white;
                    }
                }
                html,
                body,
                #root {
                    width: 100%;
                    min-height: 100%;
                    margin: 0;
                    padding: 0;
                }
                p {
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
                .page-transition {
                    position: relative;
                    display: block;
                }
                .page-enter {
                    opacity: 0;
                    width: 100%;
                    transform: scale(0.9);
                    transform-origin: center 20vh;
                }
                .page-enter-active {
                    opacity: 1;
                    transform: scale(1);
                    transition: all 250ms 100ms ease-out;
                }
                .page-exit {
                    opacity: 1;
                    width: 100%;
                    transform: scale(1);
                    position: absolute;
                    top: 0;
                    transform-origin: center 20vh;
                }
                .page-exit-active {
                    opacity: 0;
                    transform: scale(1.1);
                    transition: all 250ms ease-in;
                }
                @media ${media.medium} {
                    html {
                        font-size: 18px;
                    }
                }
                @media ${media.smallMedium} {
                    html {
                        font-size: 16px;
                    }
                }
                @media print {
                    html {
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    );
}

export default MyApp;
