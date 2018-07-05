import React from 'react';
import { render } from 'react-snapshot';
import cxs from 'cxs';
import App from './App';
import pageCss from './pageCss';

const isServer = !!navigator.userAgent.match(/Node\.js/i);
pageCss();

render(<App />, document.getElementById('root'));

if (isServer) {
  const style = document.createElement('style');
  style.textContent = cxs.css();
  document.head.appendChild(style);
  cxs.reset();
}
