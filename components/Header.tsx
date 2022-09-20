import { fonts, media } from "../lib/styles";
import { useTheme } from "../lib/Themes";
import { NavLink } from "./NavLink";
import { SocialIcons } from "./SocialIcons";

export function Header() {
    return (
        <>
            <header className="Header-container">
                <div className="Header-main">
                    <NavLink className="Header-headingLink" href="/">
                        Alex Dytrych
                    </NavLink>

                    <nav>
                        <NavDivider />
                        <NavLink href="/cv">CV</NavLink>
                        <NavDivider />
                        <NavLink href="https://alex.dytry.ch/toys">Toys</NavLink>
                        <NavDivider />
                        <NavLink href="/contact">Contact</NavLink>
                    </nav>
                </div>

                <SocialIcons className="Header-socialIcons" />
            </header>
            <style jsx>{`
                .Header-container {
                    padding-bottom: 2rem;
                    padding-top: 5rem;
                    position: relative;
                }
                .Header-main {
                    display: flex;
                }
                .Header-container :global(.Header-socialIcons) {
                    position: absolute;
                    right: 0;
                    top: 5rem;
                }
                @media ${media.medium} {
                    .Header-container {
                        padding-top: 3rem;
                    }
                    .Header-main {
                        display: block;
                    }
                    .Header-headingLink {
                        display: block;
                        font-size: 1.8rem;
                        padding-bottom: 1rem;
                    }
                    .Header-socialIcons {
                        top: 3rem;
                    }
                }
                @media ${media.small} {
                    .Header-container {
                        padding-top: 2rem;
                    }
                    .Header-socialIcons {
                        top: 2rem;
                    }
                }
                @media print {
                    .Header-container {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}

function NavDivider() {
    const theme = useTheme();
    return (
        <>
            <span className="NavDivider">•</span>
            <style jsx>{`
                .NavDivider {
                    font-family: ${fonts.heading};
                    font-height: 400;
                    color: ${theme.text};
                    font-size: 1.5rem;
                    margin: 0 1rem;
                    opacity: 0.6;
                }

                @media ${media.medium} {
                    .NavDivider:first-child {
                        display: none;
                    }
                }
            `}</style>
        </>
    );
}
