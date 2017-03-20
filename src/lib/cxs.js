import React from 'react';
import cxs from 'cxs/monolithic';
import prefix from 'inline-style-prefixer/static';
import getDisplayName from './getDisplayName';

let currentV = 0;
const cache = process.env.NODE_ENV === 'production';

export const getCss = () => {
  try {
    return cxs.getCss();
  } catch(e) {
    console.log(e);
  }
};

export const resetCss = () => {
  currentV = (currentV + 1) % 10;
  cxs.reset();
};

const toArray = (arr) => {
  if (arr == null) return [];
  if (Array.isArray(arr)) return arr;
  return [arr];
};

const evalStyle = (selector, styles) => {
  if (styles) {
    // we have a named selector
    if (styles.composes) throw new Error('Cannot use `composes` with selector');
    return cxs(selector, prefix(styles));
  }

  const { composes, ...rest } = selector;
  const prefixed = cxs(prefix(rest));
  if (!composes) return prefixed;

  const composeClasses = toArray(composes)
    .map(className =>
      (typeof className === 'function'
        ? className()
        : className));

  return `${composeClasses.join(' ')} ${prefixed}`;
};

const getFn = (selector, styles) => {
  const v = currentV;
  let out = null;

  const fn = () => {
    if (!cache || !out || v !== currentV) {
      out = evalStyle(selector, styles);
    }

    return out;
  };

  fn.styles = styles || selector;

  return fn;
};

export const component = (Component, css) => {
  const cssFn = getFn(css);
  const wrapped = props =>
    React.createElement(Component, {
      ...props,
      className: `${cssFn()} ${props.className || ''}`,
    });

  wrapped.propTypes = {
    className: React.PropTypes.string,
  };

  wrapped.displayName = `cxs(${getDisplayName(Component)})`;

  return wrapped;
};

export const cxsComponent = component;

export default getFn;
