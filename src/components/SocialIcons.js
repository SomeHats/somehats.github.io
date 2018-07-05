import PropTypes from 'prop-types';
import React from 'react';
import GithubIcon from 'react-icons/lib/io/social-github';
import TwitterIcon from 'react-icons/lib/io/social-twitter';

import cxsComponent from 'cxs/component';
import { primary } from '../lib/colors';

const Nav = cxsComponent('nav')({
  display: 'flex',
  flexWrap: 'nowrap',

  'a:not(:first-child)': {
    marginLeft: '1rem',
  },

  svg: {
    width: '1.8rem',
    height: '1.8rem',
  },
});

const NavItem = ({ href, icon: Icon }) => (
  <a href={href}>
    <Icon color={primary} />
  </a>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

const SocialIcons = ({ className }) => (
  <Nav className={className}>
    <NavItem href="https://github.com/somehats" icon={GithubIcon} />
    <NavItem href="https://twitter.com/somehats" icon={TwitterIcon} />
  </Nav>
);

SocialIcons.propTypes = {
  className: PropTypes.string,
};

export default SocialIcons;
