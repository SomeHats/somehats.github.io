import Head from "next/head";
import { ReactNode } from "react";
import { NoSSR } from "../components/NoSSR";
import { A, bgColor, Em, fonts, H1, H3, H5, Img, media, primary } from "../lib/styles";
import { useTheme } from "../lib/Themes";
import profileImage from "../public/assets/profile-tmp.jpg";
import EmailIcon from "react-icons/lib/io/email";
import WebIcon from "react-icons/lib/io/ios-world";
import GithubIcon from "react-icons/lib/io/social-github";
import TwitterIcon from "react-icons/lib/io/social-twitter";

export default function Cv() {
    return (
        <>
            <Head>
                <title>CV | Alex Dytrych</title>
            </Head>
            <article className="Cv">
                <CvHeader />
                <CvSummary />
                <CvWorkHistory />
                <CvCoolStuff />
            </article>
            <style jsx>{``}</style>
        </>
    );
}

function CvHeader() {
    return (
        <header className="CvHeader">
            <section className="CvHeader-nameSection">
                <H1>Alex Dytrych</H1>
                <h4 className="CvHeader-jobTitle">
                    Full-Stack Developer &amp; Designer
                    <br /> Teacher &amp; Facilitator
                </h4>
                <p className="CvHeader-locationUpdate">
                    She/her • London, UK / Remote • Updated July 2018
                </p>
            </section>
            <section className="CvHeader-imageSection">
                <Img src={profileImage} className="CvHeader-profilePicture" />
            </section>
            <section className="CvHeader-contactSection">
                <CvContact />
            </section>
            <style jsx>{`
                .CvHeader {
                    display: flex;
                }
                .CvHeader-nameSection {
                    order: 1;
                    flex: 1 1 auto;
                }
                .CvHeader-imageSection {
                    order: 0;
                    margin-right: 2rem;
                    flex: 0 0 10rem;
                }
                .CvHeader :global(.CvHeader-profilePicture) {
                    border-radius: 100%;
                }
                .CvHeader-contactSection {
                    order: 2;
                    flex: 0 0 12rem;
                }
                .CvHeader-jobTitle {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-size: 1rem;
                    margin: 1rem 0;
                }
                .CvHeader-locationUpdate {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    font-style: italic;
                    opacity: 0.5;
                    font-size: 0.8rem;
                }
                @media ${media.smallMedium} {
                    display: block;
                }
                @media screen and (max-width: 950px) {
                    .CvHeader-imageSection {
                        display: none;
                    }
                }
            `}</style>
        </header>
    );
}

function CvContact() {
    return (
        <ul className="CvContact">
            <NoSSR>
                <CvContactItem href="mailto:alex@dytry.ch" icon={EmailIcon} title="Email">
                    alex@dytry.ch
                </CvContactItem>
            </NoSSR>
            <CvContactItem href="https://alex.dytry.ch" icon={WebIcon} title="Website">
                alex.dytry.ch
            </CvContactItem>
            <CvContactItem href="https://github.com/somehats" icon={GithubIcon} title="GitHub">
                SomeHats
            </CvContactItem>
            <CvContactItem href="https://twitter.com/somehats" icon={TwitterIcon} title="Twitter">
                @SomeHats
            </CvContactItem>
            <style jsx>{`
                .CvContact {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    text-align: right;
                }
                @media ${media.smallMedium} {
                    .CvContact {
                        text-align: left;
                    }
                }
            `}</style>
        </ul>
    );
}

function CvContactItem({
    href,
    icon: Icon,
    title,
    children,
}: {
    href: string;
    icon: (props: { color?: string; className?: string }) => JSX.Element;
    title: string;
    children: ReactNode;
}) {
    const theme = useTheme();
    return (
        <li className="CvContactItem">
            <A className="CvContactItem-link" href={href} title={title}>
                {children}
            </A>
            <Icon className="CvContactItem-icon" />
            <style jsx>{`
                .CvContactItem {
                    color: ${theme.primaryText};
                    margin: 0.5rem 0;
                }
                .CvContactItem :global(.CvContactItem-link) {
                    display: inline-block;
                    margin: 0 1rem;
                }
                .CvContactItem :global(.CvContactItem-link)::after {
                    display: none;
                }
                .CvContactItem :global(.CvContactItem-icon) {
                    margin-top: -0.2rem;
                    width: 1.8rem;
                    height: 1.8rem;
                }
                @media ${media.smallMedium} {
                    .CvContactItem {
                        display: flex;
                    }
                    .CvContactItem :global(.CvContactItem-link) {
                        order: 1;
                    }
                    .CvContactItem :global(.CvContactItem-icon) {
                        order: 0;
                    }
                }
            `}</style>
        </li>
    );
}

function CvSummary() {
    return (
        <section className="CvSummary">
            <p>
                I&apos;m a freelance full-stack <Em>JavaScript</Em> developer &amp; designer who
                specializes in creating delightful, playful, high-performance web applications with
                tech like <Em>React</Em>, <Em>Node.js</Em>, and <Em>PostgreSQL</Em>. I have over 6
                years experience building <Em>apps</Em>, <Em>games</Em>, and <Em>tools</Em> for the
                web.
            </p>
            <p>
                I spend a lot of time thinking about coding, computational thinking, and how we
                teach it. As a teacher/facilitator, I&apos;ve designed &amp; delivered{" "}
                <Em>degree-level</Em> software engineering courses, taught business executives to
                build their own <Em>IoT devices</Em>, and introduced 7-year-olds to{" "}
                <Em>game design</Em>. I&apos;m also the creator of{" "}
                <A href="https://eraseallkittens.com">Erase All Kittens</A>, an{" "}
                <Em>award-winning</Em> game that teaches children aged 8+ to code.
            </p>
            <style jsx>{`
                .CvSummary {
                    padding-top: 2rem;
                    text-align: justify;
                }
                @media ${media.smallMedium} {
                    padding-top: 1rem;
                }
            `}</style>
        </section>
    );
}

function CvWorkHistory() {
    return (
        <section className="CvWorkHistory">
            <H3>Work History</H3>

            <CvItem
                name={
                    <>
                        Developer &amp; Designer • <A href="http://airtable.com">Airtable</A>
                    </>
                }
                date="April 2017 - present"
                tags={[
                    "Freelance / Consulting",
                    "Product",
                    "UI/UX Design",
                    "JavaScript",
                    "React.js",
                    "Data Visualisation",
                ]}
            >
                <p>
                    Airtable was looking for help developing Blocks - apps embedded in your
                    spreadsheet/database. With only rough direction and customer feedback, I
                    designed, and implemented several Blocks. The Blocks I created are key features
                    for large Airtable clients, such as well known social media and video streaming
                    companies.
                </p>
                <p>
                    I also improved the Blocks SDK itself. I added new features for tighter
                    integration with the rest of Airtable, and made several API UX changes to make
                    things faster and easier for other developers working on the platform.
                </p>
            </CvItem>

            <CvItem
                name={
                    <>
                        Educator &amp; Facilitator • <A href="http://ada.ac.uk">Ada College</A>
                    </>
                }
                date="January 2017 - present"
                tags={[
                    "Freelance / Consulting",
                    "Education",
                    "JavaScript",
                    "Java",
                    "Games",
                    "Agile",
                ]}
            >
                <p>
                    At Ada, The National College for Digital Skills, I've designed and delivered
                    several courses and programs. My recent work has been on the 2-year
                    degree-equivalent Digital Innovation Apprenticeship. The course has seen
                    candidates go from absolute beginners to valued members of their software teams
                    at companies like Google, Facebook, and EY.
                </p>
                <p>
                    I co-led the software engineering modules. My personal focus is in ensuring we
                    emphasize the "soft" skills required to be a successful developer. As a result,
                    students learn faster and more collaboratively, in a highly self-directed
                    environment. I also supported delivery of modules on user-centered design, agile
                    methodologies, data structures, and algorithms.
                </p>
            </CvItem>

            <CvItem
                name={
                    <>
                        Product Designer &amp; Lead Developer •{" "}
                        <A href="http://bitetheballot.co.uk">Verto</A>
                    </>
                }
                date="May 2017 - June 2018"
                tags={[
                    "Freelance / Consulting",
                    "Product",
                    "UI/UX Design",
                    "Games",
                    "JavaScript",
                    "React.js",
                    "GraphQL",
                    "PostgreSQL",
                ]}
            >
                <p>
                    At youth politics charity Bite The Ballot, I designed and built Verto - a
                    playful survey &amp; interactive video platform. With the help of a colleague, I
                    took BTB's team right through the product development process. I facilitated
                    ideation sessions, produced initial prototypes, and tested with some real-world
                    users.
                </p>
                <p>
                    After several design iterations, we built out and launched the platform -
                    testing as we went. My focus was on the technical architecture; UX; and the
                    playful, high-performance frontend. The project has been a huge success - the
                    playful surveys have a very high completion rate beyond our initial
                    expectations. BTB has started to become self-sufficient by offering Verto to
                    comercial businesses.
                </p>
            </CvItem>

            <CvItem
                name={
                    <>
                        Software Engineer • <A href="https://musicglue.com">Music Glue</A>
                    </>
                }
                date="March 2016 - March 2017"
                tags={[
                    "JavaScript",
                    "Node.js",
                    "React.js",
                    "Redux",
                    "GraphQL",
                    "PostgreSQL",
                    "Ruby",
                ]}
            >
                <p>
                    As a Software Engineer, I helped design, develop, and architect a rewrite of
                    Music Glue's e-commerce system. We replaced a legacy PHP &amp; MySQL monolith
                    with a collection of <Em>Node.JS</Em> &amp; <Em>PostgreSQL</Em> services,
                    exposed to clients via a single unified <Em>GraphQL</Em> API. The new system was
                    orders of magnitude faster and more scalable, with far greater flexibility for
                    our users.
                </p>
                <p>
                    On the client-side, I architected a light-weight, performance-oriented{" "}
                    <Em>React/Redux</Em> shop frontend used on all Music Glue stores. We set a tight
                    performance budget and were able to keep quite comfortably within it. I also
                    created a new theming system that dramatically increased the customization
                    options available to customers.
                </p>
            </CvItem>

            <CvItem
                name={
                    <>
                        Co-Founder &amp; CTO • <A href="http://drumrollhq.com">Drum Roll HQ</A>
                    </>
                }
                date="September 2013 - February 2016"
                tags={[
                    "Co-Founder",
                    "Product",
                    "UI/UX Design",
                    "JavaScript",
                    "Node.js",
                    "React.js",
                    "PostgreSQL",
                    "MongoDB",
                    "Pixi.js",
                    "AWS",
                ]}
            >
                <p>
                    As co-founder &amp; CTO, I was responsible for all the technical work on our
                    product Erase All Kittens, an award-winning game that teaches children how to
                    code. I started the project in my bedroom, and by the time I left, we had
                    introduced hundreds of thousands of children to coding.
                </p>
                <p>
                    I was responsible for the educational content, and much of the mechanics &amp;
                    puzzle design. I created a custom browser-based game engine to support E.A.K.'s
                    core mechanic - the ability to edit the HTML and CSS source code to levels in
                    real time, as you were playing.
                </p>
            </CvItem>

            <CvItem
                name={
                    <>
                        Developer • <A href="http://decoded.com">Decoded</A>
                    </>
                }
                date="September 2013 - September 2014"
                tags={[
                    "JavaScript",
                    "Node.js",
                    "PHP",
                    "PostgreSQL",
                    "Real-time",
                    "Go",
                    "Angular.js",
                ]}
            >
                <p>
                    At Decoded I worked on a range of internal and external software products.
                    Notably, I designed and built the live coding environment Decoded used to
                    deliver all their coding workshops. The web-based editor was designed to have
                    the lowest possible barrier to entry and a very tight feedback loop to help new
                    coders understand the effects of their changes.
                </p>
            </CvItem>
            <style jsx>{`
                .CvWorkHistory {
                    padding-top: 1rem;
                }
            `}</style>
        </section>
    );
}

function CvItem({
    name,
    date,
    tags = [],
    children,
}: {
    name: ReactNode;
    date: ReactNode;
    tags?: Array<ReactNode>;
    children: ReactNode;
}) {
    return (
        <article className="CvItem">
            <header className="CvItem-head">
                <H5 className="CvItem-name">{name}</H5>
                <time className="CvItem-date">{date}</time>
            </header>
            <div className="CvItem-desc">
                {tags.length > 0 && (
                    <ul className="CvItem-tagList">
                        {tags.map((tag, i) => (
                            <li key={i} className="CvItem-tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                )}

                {children}
            </div>
            <style jsx>{`
                .CvItem {
                    padding-bottom: 1rem;
                    page-break-inside: avoid;
                }
                .CvItem-head {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    flex-wrap: wrap;
                }
                .CvItem :global(.CvItem-name) {
                    margin-bottom: 0;
                    margin-right: 1rem;
                    flex: 1 0 auto;
                    max-width: 100%;
                }
                .CvItem-date {
                    font-family: ${fonts.heading};
                    font-weight: 400;
                    display: block;
                    flex: 0 1 auto;
                    opacity: 0.5;
                    font-style: italic;
                }
                .CvItem-desc {
                    clear: both;
                    margin-bottom: 1rem;
                    text-align: justify;
                }
                .CvItem-tagList {
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    line-height: 1;
                }
                .CvItem-tag {
                    display: inline-block;
                    color: ${bgColor};
                    background: ${primary};
                    margin-right: 0.5rem;
                    margin-bottom: 0.5rem;
                    padding: 0.3rem 0.5rem;
                    opacity: 0.8;
                    font-size: 0.8rem;
                    vertical-align: top;
                }
            `}</style>
        </article>
    );
}

function CvCoolStuff() {
    return (
        <section className="CvCoolStuff">
            <H3>Talks &amp; Publications</H3>

            <CvItem
                name={
                    <>
                        Co-Author &amp; Consultant • JavaScript Made Easy •{" "}
                        <A href="http://dk.com">DK</A>
                    </>
                }
                date="February 2018"
            >
                <A href="https://amzn.to/2mIPmQc">The book on Amazon</A>. A short exercise book for
                children aimed 7-11, introducing them to programming in JavaScript with a series of
                short, fun projects. The book was published by DK, part of Penguin Random House.
            </CvItem>

            <CvItem name="Talk • Intro to GraphQL" date="August 2017">
                <A href="http://bit.ly/intro-graphql">Check out the slides</A>. A talk about GraphQL
                I gave at Node Workshops London. What it is, how it works, how it compares to other
                technology, and how to get started with it.
            </CvItem>

            <CvItem name="Talk • Teaching Tech" date="July 2017">
                <A href="http://bit.ly/teaching-tech">Check out the slides</A>. A talk I gave at
                Queer Code London about how everyone in tech - especially those who are new to the
                industry - has something to offer when it comes to teaching others.
            </CvItem>
            <CvItem name="Talk • Error Handling in GraphQL" date="January 2017">
                <p>
                    <A href="http://bit.ly/graphql-error-handling">Watch on Skills Matter</A>. A
                    short talk on our use of <Em>GraphQL</Em> at Music Glue. I discussed the
                    decision to make error states an explicit part of our graph schema for extra
                    resilience if a service went down.
                </p>
            </CvItem>
            <style jsx>{`
                .CvCoolStuff {
                    padding-top: 1rem;
                }
            `}</style>
        </section>
    );
}
