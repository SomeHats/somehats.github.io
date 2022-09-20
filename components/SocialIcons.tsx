import classNames from "classnames";
import GithubIcon from "react-icons/lib/io/social-github";
import TwitterIcon from "react-icons/lib/io/social-twitter";
import { primary } from "../lib/colors";

export function SocialIcons({ className }: { className?: string }) {
    return (
        <>
            <nav className={classNames("SocialIcons", className)}>
                <NavItem href="https://github.com/somehats" icon={GithubIcon} title="GitHub" />
                <NavItem href="https://twitter.com/somehats" icon={TwitterIcon} title="Twitter" />
            </nav>
            <style jsx>{`
                .SocialIcons {
                    display: flex;
                    flex-wrap: nowrap;
                }
            `}</style>
        </>
    );
}

function NavItem({
    href,
    title,
    icon: Icon,
}: {
    href: string;
    title: string;
    icon: (props: { color?: string; className?: string }) => JSX.Element;
}) {
    return (
        <>
            <a href={href} title={title} className="NavItem">
                <Icon color={primary} className="NavItem-icon" />
            </a>
            <style jsx>{`
                .NavItem:not(:first-child) {
                    margin-left: 1rem;
                }
                .NavItem-icon {
                    width: 1.8rem;
                    height: 1.8rem;
                }
            `}</style>
        </>
    );
}
