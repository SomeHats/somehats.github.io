import React from 'react';
import Helmet from 'react-helmet';
import {
  CVCoolStuff,
  CVHeader,
  CVSummary,
  CVWorkHistory,
} from '../components/cv';

const CVPage = () => (
  <article>
    <Helmet title="CV | Alex Dytrych" />
    <CVHeader />
    <CVSummary />
    <CVWorkHistory />
    <CVCoolStuff />
  </article>
);

export default CVPage;
