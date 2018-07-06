import React from 'react';
import { render } from 'react-snapshot';
import Helmet from 'react-helmet';
import cxs from 'cxs';
import App from './App';
import pageCss from './pageCss';

const isServer = !!navigator.userAgent.match(/Node\.js/i);

render(
  <React.Fragment>
    <Helmet>
      <style>{pageCss()}</style>
    </Helmet>
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);

if (isServer) {
  const style = document.createElement('style');
  style.textContent = cxs.css();
  document.head.appendChild(style);
  cxs.reset();
}
