import React from 'react';

import cxsComponent from 'cxs/component';
import { textColor } from '../lib/colors';
import { media, headingsFont } from '../lib/styles';

import NavLink from './NavLink';
import SocialIcons from './SocialIcons';

const HeaderContainer = cxsComponent('header')({
  paddingBottom: '2rem',
  paddingTop: '5rem',
  position: 'relative',

  [media.medium]: {
    paddingTop: '3rem',
  },

  [media.small]: {
    paddingTop: '2rem',
  },

  [media.print]: {
    display: 'none',
  },
});

const HeaderMain = cxsComponent('div')({
  display: 'flex',

  [media.medium]: {
    display: 'block',
  },
});

const HeadingLink = cxsComponent(NavLink)({
  [media.medium]: {
    display: 'block',
    fontSize: '1.8rem',
    paddingBottom: '1rem',
  },
});

// const Nav = cxsComponent('nav')({
//   [media.small]: {
//     display: 'flex',
//     justifyContent: 'flex-start',
//   },
// });

const HeaderSocialIcons = cxsComponent(SocialIcons)({
  position: 'absolute',
  right: 0,
  top: '5rem',

  [media.medium]: {
    top: '3rem',
  },

  [media.small]: {
    top: '2rem',
  },
});

const NavDivider = cxsComponent(({ className }) => (
  <span className={className}>•</span>
))({
  composes: headingsFont,
  color: textColor,
  fontSize: '1.5rem',
  margin: '0 1rem',
  opacity: 0.6,

  [media.medium]: {
    ':first-child': {
      display: 'none',
    },
  },
});

const Header = () => (
  <HeaderContainer>
    <HeaderMain>
      <HeadingLink exact href="/">
        Alex Dytrych
      </HeadingLink>

      <nav>
        {/* <NavDivider />
        <NavLink href="/projects">Projects</NavLink> */}
        <NavDivider />
        <NavLink href="/cv">CV</NavLink>
        <NavDivider />
        <NavLink href="/contact">Contact</NavLink>
      </nav>
    </HeaderMain>

    <HeaderSocialIcons />
  </HeaderContainer>
);

export default Header;
