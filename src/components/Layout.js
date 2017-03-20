import React from 'react';
import Helmet from 'react-helmet';

import { cxsComponent } from '../lib/cxs';
import { primaryLightest } from '../lib/colors';

import Header from './Header';
import SocialIcons from './SocialIcons';

const Main = cxsComponent('main', {
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  maxWidth: 1000,
  minHeight: '100%',
  padding: '0 4rem',

  '@media screen and (max-width: 800px)': {
    padding: '0 2rem',
  },

  '@media screen and (max-width: 380px)': {
    padding: '0 1rem',
  },
});

const Content = cxsComponent('div', {
  flex: '1',
});

const Footer = cxsComponent('footer', {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '2rem',
  paddingTop: '2rem',

  '@media screen and (min-height: 800px)': {
    display: 'none',
  },
});

const metaTags = [
  { name: 'theme-color', content: primaryLightest },
];

const Layout = ({ children }) => (
  <Main>
    <Helmet
      meta={metaTags}
    />
    <Header />
    <Content>
      {children}
    </Content>
    <Footer>
      <SocialIcons />
    </Footer>
  </Main>
);

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default Layout;
