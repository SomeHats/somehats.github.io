import React from 'react';
import { Link } from 'react-router-dom';
import { cxsComponent } from '../lib/cxs';
import { secondary } from '../lib/colors';
import { headingsFont } from '../lib/styles';

const NavItem = cxsComponent(Link, {
  composes: headingsFont,
  color: secondary,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '1.5rem',
  textDecoration: 'none',

  span: {
    display: 'inline-block',
    transition: 'all 0.2s ease',
    width: 'auto',
  },

  ':hover': {
    span: {
      transform: 'translateY(-0.2rem)',
    },
  },
});

const NavLink = ({ href, children, className }) => (
  <NavItem className={className} to={href}>
    <span>{children}</span>
  </NavItem>
);

NavLink.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

export default NavLink;
