import React from 'react';
import PropTypes from 'prop-types';
import CxsThemeProvider from 'cxs/ThemeProvider';
import cxsComponent from 'cxs/component';
import { Themes, ThemeNames } from '../lib/Themes';

const { Provider, Consumer } = React.createContext();

const ThemeContainer = cxsComponent('div')(({ theme }) => ({
  color: theme.text,
}));

const ThemeProvider = ({ theme, children }) => (
  <CxsThemeProvider theme={Themes[theme]}>
    <Provider value={Themes[theme]}>
      <ThemeContainer>{children}</ThemeContainer>
    </Provider>
  </CxsThemeProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.oneOf(Object.keys(ThemeNames).map(key => ThemeNames[key]))
    .isRequired,
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
export const ThemeConsumer = Consumer;
