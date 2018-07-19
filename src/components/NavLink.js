import PropTypes from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import cxs from 'cxs';
import { ThemeNames, Themes } from '../lib/Themes';
import { primary, primaryLight, textColor, darkTextColor } from '../lib/colors';
import { headingsFont } from '../lib/styles';
import { ThemeConsumer } from './Layout';

const navLinkClass = cxs({
  ...headingsFont,
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '1.5rem',
  textDecoration: 'none',

  '> span': {
    display: 'inline-block',
    transition: 'transform 0.2s ease',
    width: 'auto',
  },

  ':hover > span': {
    transform: 'translateY(-0.2rem)',
  },
});

const navLinkClassLight = cxs({
  color: primary,
});
const navLinkClassDark = cxs({
  color: primaryLight,
});

const activeClassLight = cxs({
  '> span': {
    color: textColor,
  },
  ':hover > span': {
    transform: 'translateY(0)',
  },
});

const activeClassDark = cxs({
  '> span': {
    color: darkTextColor,
  },
  ':hover > span': {
    transform: 'translateY(0)',
  },
});

const NavItem = ({ href, children, className, exact, external }) => {
  console.log({ navLinkClass, navLinkClassDark, navLinkClassLight });
  return (
    <ThemeConsumer>
      {theme => {
        const cName = cx(
          navLinkClass,
          theme.id === ThemeNames.DARK ? navLinkClassDark : navLinkClassLight,
          className,
        );

        if (external) {
          return (
            <a className={cName} href={href}>
              <span>{children}</span>
            </a>
          );
        }

        return (
          <NavLink
            className={cName}
            activeClassName={
              theme.id === ThemeNames.DARK ? activeClassDark : activeClassLight
            }
            to={href}
            exact={exact}
          >
            <span>{children}</span>
          </NavLink>
        );
      }}
    </ThemeConsumer>
  );
};

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  exact: PropTypes.bool,
  external: PropTypes.bool,
};

export default NavItem;
