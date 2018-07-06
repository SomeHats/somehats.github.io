import React from 'react';
import Helmet from 'react-helmet';
import { H2 } from '../lib/styles';

const Error404Page = () => (
  <article>
    <Helmet title="404 | Alex Dytrych" />
    <H2>There&rsquo;s nothing here</H2>
    <p>Except this error page, I guess...</p>
  </article>
);

export default Error404Page;
