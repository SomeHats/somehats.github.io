import cxs from './lib/cxs';
import { media, bodyFont, bgColor, textColor } from './lib/styles';

export default () => {
  cxs('html', {
    fontSize: 20,
    [media.medium]: {
      fontSize: 18,
    },
    [media.smallMedium]: {
      fontSize: 16,
    },
    [media.print]: {
      fontSize: 12,
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
    transformOrigin: 'center 20vh',
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
    transformOrigin: 'center 20vh',
  })();

  cxs('.page-leave-active', {
    opacity: 0,
    transform: 'scale(1.1)',
    transition: 'all 250ms ease-in',
  })();
};
