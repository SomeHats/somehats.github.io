import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import { getCss, resetCss } from './lib/cxs';
import pageCss from './pageCss';

const isServer = !!navigator.userAgent.match(/Node\.js/i);
pageCss();

render(
  <App />,
  document.getElementById('root')
);

if (isServer) {
  const style = document.createElement('style');
  style.textContent = getCss();
  document.head.appendChild(style);
  resetCss();
}
