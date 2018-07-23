import React from 'react';
import Helmet from 'react-helmet';
import { H3, A } from '../lib/styles';
import { ThemeNames } from '../lib/Themes';
import ThemeProvider from '../components/ThemeProvider';
import NoSSR from '../components/NoSSR';

const ContactPage = () => (
  <ThemeProvider theme={ThemeNames.LIGHT}>
    <article>
      <Helmet title="Contact | Alex Dytrych" />
      <H3>Say Hi</H3>
      <ul>
        <NoSSR>
          <li>
            <A href="mailto:alex@dytry.ch">Email - alex@dytry.ch</A>
          </li>
        </NoSSR>
        <li>
          <A href="https://twitter.com/somehats">Twitter - @SomeHats</A>
        </li>
        <li>
          <A href="https://www.linkedin.com/in/alex-dytrych-5b1aa8a3">
            LinkedIn (lol)
          </A>
        </li>
      </ul>

      <p>
        I&apos;m based in London, England. If you&apos;re in town, let&apos;s
        get coffee{' '}
        <span role="img" aria-label="coffee">
          ☕️
        </span>{' '}
        <span role="img" aria-label="unicorn">
          🦄
        </span>
      </p>
    </article>
  </ThemeProvider>
);

export default ContactPage;
