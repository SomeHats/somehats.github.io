const fs = require('fs');
const path = require('path');
const color = require('color');

const bgColor = color('#FFFFFF');
const textColor = color('#333333');

const primary = color('#8E54E9');
const secondary = primary;

const colors = {
  bgColor,
  textColor,
  primary,
  secondary,
  primaryLightest: primary.lighten(0.5),
  primaryDark: textColor.mix(primary, 0.2),
  primaryDarker: textColor.mix(primary, 0.5),
};

const colorsSrc = Object
  .keys(colors)
  .map(key => `export const ${key} = '${colors[key].string()}';`)
  .join('\n');

const src = `
// GENERATED FILE. Do not edit directly.

${colorsSrc}
`.trim();

fs.writeFileSync(path.resolve(__dirname, '../src/lib/colors.js'), src, 'utf-8');
