import { ComponentType } from "react";
import { IconType } from "react-icons";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";

export function SocialIcons() {
    return (
        <nav className="flex flex-nowrap gap-4">
            <NavItem href="https://github.com/somehats" icon={IoLogoGithub} title="GitHub" />
            <NavItem href="https://twitter.com/somehats" icon={IoLogoTwitter} title="Twitter" />
        </nav>
    );
}

function NavItem({ href, title, icon: Icon }: { href: string; title: string; icon: IconType }) {
    return (
        <a href={href} title={title}>
            <Icon className="h-7 w-7 fill-purple" />
        </a>
    );
}
