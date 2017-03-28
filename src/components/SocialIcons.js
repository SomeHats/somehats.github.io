import React from 'react';
import GithubIcon from 'react-icons/lib/io/social-github';
import TwitterIcon from 'react-icons/lib/io/social-twitter';

import { cxsComponent } from '../lib/cxs';
import { primary } from '../lib/colors';

const Nav = cxsComponent('nav', {
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
  href: React.PropTypes.string.isRequired,
  icon: React.PropTypes.func.isRequired,
};

const SocialIcons = ({ className }) => (
  <Nav className={className}>
    <NavItem href="https://github.com/somehats" icon={GithubIcon} />
    <NavItem href="https://twitter.com/somehats" icon={TwitterIcon} />
  </Nav>
);

SocialIcons.propTypes = {
  className: React.PropTypes.string,
};

export default SocialIcons;
