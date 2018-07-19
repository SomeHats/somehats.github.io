import * as Colors from './colors';

export const ThemeNames = Object.freeze({
  DARK: 'DARK',
  LIGHT: 'LIGHT',
});

export const Themes = Object.freeze({
  [ThemeNames.LIGHT]: {
    id: ThemeNames.LIGHT,
    bg: Colors.bgColor,
    text: Colors.textColor,
    primaryText: Colors.primaryDark,
    androidThemeColor: Colors.primaryLightest,
  },
  [ThemeNames.DARK]: {
    id: ThemeNames.DARK,
    bg: 'black',
    text: Colors.darkTextColor,
    primaryText: Colors.primaryLight,
    androidThemeColor: 'black',
  },
});
