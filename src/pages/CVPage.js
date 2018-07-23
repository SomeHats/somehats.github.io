import React from 'react';
import Helmet from 'react-helmet';
import { ThemeNames } from '../lib/Themes';
import ThemeProvider from '../components/ThemeProvider';
import {
  CVCoolStuff,
  CVHeader,
  CVSummary,
  CVWorkHistory,
} from '../components/cv';

const CVPage = () => (
  <ThemeProvider theme={ThemeNames.LIGHT}>
    <article>
      <Helmet title="CV | Alex Dytrych" />
      <CVHeader />
      <CVSummary />
      <CVWorkHistory />
      <CVCoolStuff />
    </article>
  </ThemeProvider>
);

export default CVPage;
