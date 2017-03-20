import React from 'react';
import Helmet from 'react-helmet';
import { H1 } from '../lib/styles';

const HomePage = () => (
  <article>
    <Helmet title="alex.dytry.ch" />
    <p>
      I write code and teach people stuff. Maybe hire me?
    </p>
  </article>
);

export default HomePage;
