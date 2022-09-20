import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { fonts } from "../lib/styles";
import { useTheme } from "../lib/Themes";

export function NavLink({
    href,
    children,
    className,
}: {
    href: string;
    children: ReactNode;
    className?: string;
}) {
    const theme = useTheme();
    const isActive = useRouter().asPath === href;
    return (
        <>
            <Link href={href} passHref>
                <a className={classNames("NavLink", className)}>
                    <span className="NavLink-text">{children}</span>
                </a>
            </Link>
            <style jsx>{`
                .NavLink {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    cursor: pointer;
                    display: inline-block;
                    font-size: 1.5rem;
                    text-decoration: none;
                    color: ${isActive ? theme.text : theme.primaryHeading};
                }
                .NavLink-text {
                    display: inline-block;
                    transition: transform 0.2s ease;
                    width: auto;
                }
                .NavLink:hover .NavLink-text {
                    transform: ${isActive ? "translateY(0)" : "translateY(-0.2rem)"};
                }
            `}</style>
        </>
    );
}
