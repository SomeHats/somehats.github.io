import Head from "next/head";
import { A, fonts, H1, H4, Img, Link, media } from "../lib/styles";
import ProfileImage from "../public/assets/profile-tmp.jpg";

export default function Home() {
    return (
        <>
            <Head>
                <title>Alex Dytrych</title>
            </Head>
            <article className="Home">
                <H1 className="Home-heading">Hello! I&apos;m Alex.</H1>
                <div className="Home-content">
                    <section className="Home-lead">
                        <div className="Home-tagline">
                            <H4>I build digital products and teach people stuff.</H4>
                            <H4>Sometimes, I do both at the same time.</H4>
                        </div>
                        <figure className="Home-profilePic">
                            <Img src={ProfileImage} alt="A photo of me!" />
                            <figcaption className="Home-profilePicCaption">
                                This is what I look like. I was on a hike where I made friends with
                                a bee.
                            </figcaption>
                        </figure>
                    </section>
                    <section className="Home-bio">
                        <p>
                            I&apos;m a product engineer &amp; interaction designer with ~10 years
                            experience building apps, games and tools for the web. I specialize in
                            creative tools, developer experience, and education.
                        </p>
                        <p>
                            I&apos;ve been teaching &amp; facilitating as long as I&apos;ve been
                            coding. I&apos;ve designed and delivered degree-level software
                            engineering courses, taught business executives to build their own IoT
                            devices, and introduced 7-year-olds to game design.
                        </p>
                        <p>
                            A long time ago, I started{" "}
                            <A href="https://eraseallkittens.com">Erase All Kittens</A>, an
                            award-winning game that teaches children aged 8+ how to code. You should
                            have a go! Over the last few years, E.A.K. has introduced hundreds of
                            thousands of children to coding.
                        </p>
                        <p>
                            You can hire me to help build your cool JavaScript thing!{" "}
                            <Link href="/contact">Get in touch</Link>! 🦄
                        </p>
                    </section>
                </div>
            </article>
            <style jsx>{`
                .Home-content {
                    display: flex;
                }
                .Home :global(.Home-heading) {
                    padding-top: 2rem;
                }
                .Home-lead {
                    width: 33%;
                    margin-right: 4rem;
                    flex: 0 0 auto;
                }
                .Home-profilePic {
                    padding-top: 1rem;
                    margin: 0;
                }
                .Home-profilePicCaption {
                    font-family: ${fonts.heading};
                    font-weight: 300;
                    font-style: italic;
                    opacity: 0.6;
                    font-size: 0.7rem;
                    text-align: center;
                    margin: 0 1rem;
                }
                .Home-bio {
                    text-align: justify;
                    display: block;
                }
                @media ${mediaSingleColumn} {
                    .Home-content {
                        flex-direction: column;
                    }
                    .Home-lead {
                        width: 100%;
                    }
                }
                @media ${media.small} {
                    .Home-tagline h4 {
                        display: inline;
                    }
                }
                @media ${media.smallMedium} {
                    .Home :global(.Home-heading) {
                        padding-top: 0;
                    }
                }
                @media ${media.medium} {
                    .Home-lead {
                        width: 40%;
                        margin-right: 2rem;
                    }
                }
            `}</style>
        </>
    );
}

const mediaSingleColumn = "screen and (max-width: 500px)";
