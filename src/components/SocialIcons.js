import PropTypes from 'prop-types';
import React from 'react';
import GithubIcon from 'react-icons/lib/io/social-github';
import TwitterIcon from 'react-icons/lib/io/social-twitter';

import cxs from 'cxs';
import cxsComponent from 'cxs/component';
import { primary } from '../lib/colors';

const Nav = cxsComponent('nav')({
  display: 'flex',
  flexWrap: 'nowrap',

  '> a:not(:first-child)': {
    marginLeft: '1rem',
  },
});

const iconClass = cxs({
  width: '1.8rem',
  height: '1.8rem',
});

const NavItem = ({ href, title, icon: Icon }) => (
  <a href={href} title={title}>
    <Icon color={primary} className={iconClass} />
  </a>
);

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
};

const SocialIcons = ({ className }) => (
  <Nav className={className}>
    <NavItem
      href="https://github.com/somehats"
      icon={GithubIcon}
      title="GitHub"
    />
    <NavItem
      href="https://twitter.com/somehats"
      icon={TwitterIcon}
      title="Twitter"
    />
  </Nav>
);

SocialIcons.propTypes = {
  className: PropTypes.string,
};

export default SocialIcons;
