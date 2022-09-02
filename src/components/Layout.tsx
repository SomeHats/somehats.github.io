import { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { SocialIcons } from "./SocialIcons";

export function Layout({ children }: { children: ReactNode }) {
    return (
        <main className="absolute min-h-full w-full bg-white">
            <Helmet>
                <html className="text-[20px]" />
                <body className="bg-purple font-body" />
            </Helmet>
            <div className="absolute inset-0 z-10 bg-white after:absolute after:top-0 after:left-0 after:z-10 after:h-[3px] after:w-full after:bg-purple after:print:hidden" />
            <div className="relative z-20 mx-auto flex min-h-screen max-w-5xl flex-col py-0 px-16 pt-8 print:max-w-full medium:px-8 small:px-4">
                <header />
                <div className="flex-1">{children}</div>
                <footer className="flex flex-none justify-center py-8 print:hidden">
                    <SocialIcons />
                </footer>
            </div>
        </main>
    );
}
