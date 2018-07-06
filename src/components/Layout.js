import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import cxsComponent from 'cxs/component';
import { primaryLightest } from '../lib/colors';
import { media } from '../lib/styles';

import Header from './Header';
import SocialIcons from './SocialIcons';

const Main = cxsComponent('main')({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: '1000px',
  minHeight: '100%',
  padding: '0 4rem',

  [media.medium]: {
    padding: '0 2rem',
  },

  [media.small]: {
    padding: '0 1rem',
  },

  [media.print]: {
    maxWidth: '100%',
    padding: '0 2rem',
    paddingTop: '2rem',
  },
});

const Content = cxsComponent('div')({
  flex: '1',
});

const Footer = cxsComponent('footer')({
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '2rem',
  paddingTop: '2rem',

  '@media screen and (min-height: 800px)': {
    visibility: 'hidden',
  },

  [media.print]: {
    display: 'none',
  },
});

const metaTags = [{ name: 'theme-color', content: primaryLightest }];

const Layout = ({ children }) => (
  <Main>
    <Helmet meta={metaTags} />
    <Header />
    <Content>{children}</Content>
    <Footer>
      <SocialIcons />
    </Footer>
  </Main>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;