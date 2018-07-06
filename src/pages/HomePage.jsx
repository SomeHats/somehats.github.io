import preact from 'preact';
import Helmet from 'preact-helmet';
import objstr from 'obj-str';
import headings from '../blocks/Headings.block.css';
import link from '../blocks/Link.block.css';
import styles from './HomePage.block.css';

const HomePage = () => (
  <article className={styles}>
    <Helmet title="Alex Dytrych" />
    <h1 className={objstr({ [headings.h1]: true, [styles.heading]: true })}>
      Hello! I&apos;m Alex.
    </h1>
    <div className={styles.content}>
      <section className={styles.lead}>
        <div>
          <h4
            className={objstr({
              [headings.h4]: true,
              [styles.taglineHeading]: true,
            })}
          >
            I{' '}
            <a className={link} href="https://github.com/somehats">
              write code
            </a>{' '}
            and teach people stuff.{' '}
          </h4>
          <h4
            className={objstr({
              [headings.h4]: true,
              [styles.taglineHeading]: true,
            })}
          >
            Sometimes, I do both at the same time.
          </h4>
        </div>
        <figure className={styles.profilePic}>
          <img
            className={styles.profilePicImg}
            src="/assets/profile-2-300.jpg"
            srcSet="/assets/profile-2-600.jpg 2x"
          />
          <figcaption className={styles.profilePicCaption}>
            I hope you appreciate that my hair matches me website colour scheme.
          </figcaption>
        </figure>
      </section>

      <section className={styles.bio}>
        <p>
          I&apos;m a full-stack developer who specialises in creating
          delightful, high-performance web applications with React and Node.js.
          I have 5 years experience building apps, games and tools for the web.
        </p>
        <p>
          I&apos;ve been teaching &amp; facilitating as long as I've been
          coding. I&apos;ve run courses on web programming for beginners, taught
          business executives to build their own IoT devices, and introduced
          7-year-olds to game design.
        </p>
        <p>
          Previously, I created{' '}
          <a className={link} href="https://eraseallkittens.com">
            Erase All Kittens
          </a>, a game that teaches children aged 8+ how to code. You should
          have a go! Over the last few years, E.A.K. has introduced hundreds of
          thousands of children to coding.
        </p>
        <p>
          I&apos;m currently available for part-time freelance work as a
          full-stack developer. I can also offer workshops and training on
          front-end performance tuning, GraphQL, and React.
        </p>
        <p>
          <a className={link} href="/contact">
            Get in touch
          </a>! 🦄
        </p>
      </section>
    </div>
  </article>
);

export default HomePage;
