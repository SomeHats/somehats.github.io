import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import cxsComponent from 'cxs/component';
import { media, primary } from '../lib/styles';
import { Themes, ThemeNames } from '../lib/Themes';

import ThemeProvider from './ThemeProvider';
import Header from './Header';
import SocialIcons from './SocialIcons';

const PageBackground = cxsComponent('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'white',
  zIndex: 1,

  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '3px',
    background: primary,
    zIndex: 1,

    '@media print': {
      display: 'none',
    },
  },

  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'black',
    transition: 'opacity 0.25s 0.1s ease',
    opacity: theme.id === ThemeNames.DARK ? 1 : 0,
  },
}));

const Main = cxsComponent('main')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  minHeight: '100%',
  background: theme.bg,
}));

const PageContainer = cxsComponent('div')({
  position: 'relative',
  margin: 'auto',
  maxWidth: '1000px',
  padding: '0 4rem',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100%',
  zIndex: 2,

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

const Layout = ({ children, theme = ThemeNames.LIGHT }) => (
  <ThemeProvider theme={theme}>
    <Helmet
      meta={[{ name: 'theme-color', content: Themes[theme].androidThemeColor }]}
    />
    <Main>
      <PageBackground />
      <PageContainer>
        <Header />
        <Content>{children}</Content>
        <Footer>
          <SocialIcons />
        </Footer>
      </PageContainer>
    </Main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
