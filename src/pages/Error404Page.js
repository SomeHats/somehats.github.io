import React from 'react';
import Helmet from 'react-helmet';
import { H2 } from '../lib/styles';
import { ThemeNames } from '../lib/Themes';
import ThemeProvider from '../components/ThemeProvider';

const Error404Page = () => (
  <ThemeProvider theme={ThemeNames.LIGHT}>
    <article>
      <Helmet title="404 | Alex Dytrych" />
      <H2>There&rsquo;s nothing here</H2>
      <p>Except this error page, I guess...</p>
    </article>
  </ThemeProvider>
);

export default Error404Page;
