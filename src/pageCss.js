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
    lineHeight: '1.7',
  })();

  cxs('html, body, #root', {
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
  })();

  cxs('p', {
    marginTop: 0,
    marginBottom: '1rem',
  })();

  cxs('.page-transition', {
    position: 'relative',
    display: 'block',
  })();

  cxs('.page-enter', {
    opacity: 0,
    width: '100%',
    transform: 'scale(0.9)',
  })();

  cxs('.page-enter-active', {
    opacity: 1,
    transition: 'all 250ms 100ms ease-out',
    transform: 'scale(1)',
  })();

  cxs('.page-leave', {
    opacity: 1,
    width: '100%',
    transform: 'scale(1)',
    position: 'absolute',
    top: 0,
  })();

  cxs('.page-leave-active', {
    opacity: 0,
    transform: 'scale(1.1)',
    transition: 'all 250ms ease-in',
  })();
};
