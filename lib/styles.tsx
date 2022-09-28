// import { Link as RouterLink } from "react-router-dom";
// import cxs from "cxs";
// import cxsComponent from "cxs/component";

import classNames from "classnames";
import React, { ComponentProps } from "react";
import css from "styled-jsx/css";
import { Theme, useTheme } from "./Themes";
import { default as NextLink } from "next/link";
import { default as NextImg } from "next/image";

export * from "./colors";

export const media = {
    medium: "screen and (max-width: 850px)",
    smallMedium: "screen and (max-width: 600px)",
    small: "screen and (max-width: 450px)",
} as const;

export const fonts = {
    heading: '"Libre Baskerville", serif',
    body: '"Montserrat", sans-serif',
} as const;
// export const headingsFont = {
//     fontFamily: '"Libre Baskerville", serif',
//     fontWeight: "400",
// };

// export const bodyFont = {
//     fontFamily: ,
//     fontWeight: "400",
// };

export function H1(props: ComponentProps<"h1">) {
    return (
        <>
            <h1 {...props} />
            <style jsx>{`
                h1 {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 2rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}

export function H2(props: ComponentProps<"h2">) {
    return (
        <>
            <h2 {...props} />
            <style jsx>{`
                h2 {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 1.8rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}

export function H3(props: ComponentProps<"h3">) {
    return (
        <>
            <h3 {...props} />
            <style jsx>{`
                h3 {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 1.6rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}

export function H4(props: ComponentProps<"h4">) {
    return (
        <>
            <h4 {...props} />
            <style jsx>{`
                h4 {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 1.4rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}

export function H5(props: ComponentProps<"h5">) {
    return (
        <>
            <h5 {...props} />
            <style jsx>{`
                h5 {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 1.2rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}

export function H6(props: ComponentProps<"h6">) {
    return (
        <>
            <h6 {...props} />
            <style jsx>{`
                h6 {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 1rem;
                    margin-top: 0;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}

export function Em(props: ComponentProps<"em">) {
    return (
        <>
            <em {...props} />
            <style jsx>{`
                em {
                    font-style: normal;
                    font-weight: 600;
                }
            `}</style>
        </>
    );
}

export function getLinkStyles(theme: Theme, showUrlWhenPrinting = true) {
    return css.resolve`
        .Link {
            color: ${theme.primaryText};
            text-decoration: none;
            display: inline-block;
            position: relative;
            text-shadow: 0.05em 0.04em 0 ${theme.bg}, -0.05em 0.04em 0 ${theme.bg},
                0.05em -0.04em 0 ${theme.bg}, -0.05em -0.04em 0 ${theme.bg};
        }
        .Link::before {
            content: "";
            position: absolute;
            background: ${theme.primaryText};
            height: 0.08em;
            width: 100%;
            left: 0;
            bottom: 0.35em;
            border-radius: 0.16em / 0.08em;
            opacity: 0.6;
            z-index: -1;
            transform-origin: right;
            transform: scaleX(0);
            transition: opacity 0.2s 0.04s linear, transform 0.15s 0.04s ease-in-out,
                transform-origin 0.05s linear;
        }
        .Link:hover::before {
            opacity: 1;
            transform: scaleX(1);
            transition: opacity 0.2s 0.04s linear, transform 0.15s 0.04s ease-in-out,
                transform-origin 0.05s linear;
            transform-origin: left;
        }
        @media print {
            .Link::after {
                ${showUrlWhenPrinting ? 'content: " (" attr(href) ")";' : ""}
            }
            .Link {
                color: ${showUrlWhenPrinting ? theme.primaryText : "inherit"};
            }
        }
    `;
}

export function A({
    showUrlWhenPrinting = true,
    ...props
}: ComponentProps<"a"> & { showUrlWhenPrinting?: boolean }) {
    const { className, styles } = getLinkStyles(useTheme(), showUrlWhenPrinting);
    return (
        <>
            <a {...props} className={classNames(className, "Link", props.className)} />
            {styles}
        </>
    );
}
export function Link(props: ComponentProps<typeof NextLink>) {
    const { className, styles } = getLinkStyles(useTheme());
    return (
        <>
            <NextLink passHref={true} {...props}>
                <a className={classNames(className, "Link", props.className)}>{props.children}</a>
            </NextLink>
            {styles}
        </>
    );
}
export function ButtonLink(props: ComponentProps<"button">) {
    const { className, styles } = getLinkStyles(useTheme());
    return (
        <>
            <button {...props} className={classNames(className, "Link", props.className)} />
            {styles}
            <style jsx>{`
                button.Link {
                    background: transparent;
                    border: none;
                    font: inherit;
                    padding: 0;
                    margin: 0;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export function Img(props: ComponentProps<typeof NextImg>) {
    return (
        <>
            <NextImg {...props} />
            <style jsx>{`
                img {
                    display: block;
                    max-width: 100%;
                    margin: auto;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>
    );
}
