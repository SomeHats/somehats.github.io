import React from 'react';
import Helmet from 'react-helmet';
import { H3 } from '../lib/styles';
import { ThemeNames } from '../lib/Themes';
import ThemeProvider from '../components/ThemeProvider';

const ProjectsPage = () => (
  <ThemeProvider theme={ThemeNames.LIGHT}>
    <article>
      <Helmet title="Projects | Alex Dytrych" />
      <H3>Projects</H3>
    </article>
  </ThemeProvider>
);

export default ProjectsPage;
