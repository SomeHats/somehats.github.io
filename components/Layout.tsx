import Head from "next/head";
import { ReactNode } from "react";
import { primary } from "../lib/colors";
import { media } from "../lib/styles";
import { ThemeName, useTheme } from "../lib/Themes";
import { Header } from "./Header";
import { SocialIcons } from "./SocialIcons";

export function Layout({ children }: { children: ReactNode }) {
    const theme = useTheme();
    return (
        <>
            <Head>
                <meta name="theme-color" content={theme.androidThemeColor} />
            </Head>
            <main className="Layout-main">
                <div className="Layout-bg" />
                <div className="Layout-container">
                    <Header />
                    <div className="Layout-content">{children}</div>
                    <footer className="Layout-footer">
                        <SocialIcons />
                    </footer>
                </div>
            </main>
            <style jsx>{`
                .Layout-main {
                    position: absolute;
                    width: 100%;
                    min-height: 100%;
                    background: ${theme.bg};
                    color: ${theme.text};
                }
                .Layout-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: white;
                    z-index: 1;
                }
                .Layout-bg::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 3px;
                    background: ${primary};
                    z-index: 1;
                }
                .Layout-bg::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    background: black;
                    transition: opacity 0.25s 0.1s ease;
                    opacity: ${theme.id === ThemeName.Dark ? 1 : 0};
                }
                .Layout-container {
                    position: relative;
                    margin: auto;
                    max-width: 900px;
                    padding: 0 4rem;
                    display: flex;
                    flex-direction: column;
                    min-height: 100%;
                    z-index: 2;
                }
                .Layout-content {
                    flex: 1;
                }
                .Layout-footer {
                    display: flex;
                    justify-content: center;
                    padding-bottom: 2rem;
                    padding-top: 2rem;
                }
                @media ${media.medium} {
                    .Layout-container {
                        padding: 0 2rem;
                    }
                }
                @media ${media.small} {
                    .Layout-container {
                        padding: 0 1rem;
                    }
                }
                @media print {
                    .Layout-bg::before {
                        display: none;
                    }
                    .Layout-container {
                        max-width: 100%;
                        padding: 0 2rem;
                        padding-top: 2rem;
                    }
                    .Layout-footer {
                        display: none;
                    }
                }
                @media screen and (min-height: 800px) {
                    .Layout-footer {
                        visibility: hidden;
                    }
                }
            `}</style>
        </>
    );
}
