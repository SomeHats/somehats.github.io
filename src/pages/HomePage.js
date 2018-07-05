import React from 'react';
import Helmet from 'react-helmet';
import cxsComponent from 'cxs/component';
import { media, H1, H4, A, Link, Img, headingsFont } from '../lib/styles';

const singleCol = '@media screen and (max-width: 500px)';

const Content = cxsComponent('div')({
  display: 'flex',

  [singleCol]: {
    flexDirection: 'column',
  },
});

const Heading = cxsComponent(H1)({
  paddingTop: '2rem',

  [media.smallMedium]: {
    paddingTop: 0,
  },
});

const Lead = cxsComponent('section')({
  width: '33%',
  marginRight: '4rem',
  flex: '0 0 auto',

  [media.medium]: {
    width: '40%',
    marginRight: '2rem',
  },

  [singleCol]: {
    width: '100%',
  },
});

const Tagline = cxsComponent('div')({
  [media.small]: {
    h4: {
      display: 'inline',
    },
  },
});

const ProfilePic = cxsComponent('figure')({
  paddingTop: '1rem',
  margin: '1rem',

  img: {
    width: '300px',
  },
});

const ProfilePicCaption = cxsComponent('figcaption')({
  composes: headingsFont,
  fontStyle: 'italic',
  opacity: 0.6,
  fontSize: '0.7rem',
  textAlign: 'center',
});

const Bio = cxsComponent('section')({
  textAlign: 'justify',
  display: 'block',
});

const HomePage = () => (
  <article>
    <Helmet title="Alex Dytrych" />
    <Heading>Hello! I'm Alex.</Heading>
    <Content>
      <Lead>
        <Tagline>
          <H4>
            I <A href="https://github.com/somehats">write code</A> and teach
            people stuff.{' '}
          </H4>
          <H4>Sometimes, I do both at the same time.</H4>
        </Tagline>
        <ProfilePic>
          <Img
            src="/assets/profile-2-300.jpg"
            srcSet="/assets/profile-2-600.jpg 2x"
          />
          <ProfilePicCaption>
            I hope you appreciate that my hair matches my website colour scheme.
          </ProfilePicCaption>
        </ProfilePic>
      </Lead>
      <Bio>
        <p>
          I'm a full-stack developer who specialises in creating delightful,
          high-performance web applications with React and Node.js. I have 5
          years experience building apps, games and tools for the web.
        </p>
        <p>
          I've been teaching &amp; facilitating as long as I've been coding.
          I've run courses on web programming for beginners, taught business
          executives to build their own IoT devices, and introduced 7-year-olds
          to game design.
        </p>
        <p>
          Previously, I created{' '}
          <A href="https://eraseallkittens.com">Erase All Kittens</A>, a game
          that teaches children aged 8+ how to code. You should have a go! Over
          the last few years, E.A.K. has introduced hundreds of thousands of
          children to coding.
        </p>
        <p>
          I'm currently available for part-time freelance work as a full-stack
          developer. I can also offer workshops and training on front-end
          performance tuning, GraphQL, and React.
        </p>
        <p>
          <Link to="/contact">Get in touch</Link>! 🦄
        </p>
      </Bio>
    </Content>
  </article>
);

export default HomePage;
