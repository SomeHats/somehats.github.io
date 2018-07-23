const fs = require('fs');
const path = require('path');
const color = require('color');

const bgColor = color('#FFFFFF');
const textColor = color('#333333');
const darkTextColor = color('#eeeeee');

const primary = color('#8E54E9');
const secondary = primary;

const colors = {
  bgColor,
  textColor,
  darkTextColor,
  primary,
  secondary,
  primaryLightest: primary.lighten(0.5),
  primaryLight: primary.mix(darkTextColor, 0.1),
  primaryDark: primary.mix(textColor, 0.2),
  primaryDarker: primary.mix(textColor, 0.5),
};

const colorsSrc = Object.keys(colors)
  .map(key => `export const ${key} = '${colors[key].string()}';`)
  .join('\n');

const src = `
// GENERATED FILE. Do not edit directly.

${colorsSrc}
`.trim();

fs.writeFileSync(path.resolve(__dirname, '../src/lib/colors.js'), src, 'utf-8');
