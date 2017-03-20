import cxs from './lib/cxs';
import { bodyFont, bgColor, textColor } from './lib/styles';

export default () => {
  cxs('html', {
    fontSize: 20,
    '@media screen and (max-width: 900px)': {
      fontSize: 18,
    },
    '@media screen and (max-width: 600px)': {
      fontSize: 16,
    },
  })();

  cxs('body', {
    ...bodyFont.styles,
    background: bgColor,
    color: textColor,
    fontSize: '100%',
  })();

  cxs('html, body, #root', {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  })();
};
