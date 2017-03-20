import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import cxs from '../lib/cxs';
import { secondary, textColor } from '../lib/colors';
import { headingsFont } from '../lib/styles';

const activeClass = cxs({
  span: {
    color: textColor,
  },
  ':hover': {
    span: {
      transform: 'translateY(0)',
    },
  },
});

const navLinkClass = cxs({
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

const NavItem = ({ href, children, className, exact, external }) => {
  const cName = cx(navLinkClass(), className);

  if (external) {
    return (
      <a className={cName} href={href}>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <NavLink className={cName} activeClassName={activeClass()} to={href} exact={exact}>
      <span>{children}</span>
    </NavLink>
  );
};

NavItem.propTypes = {
  href: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  exact: React.PropTypes.bool,
  external: React.PropTypes.bool,
};

export default NavItem;
