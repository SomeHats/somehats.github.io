import { Link as RouterLink } from 'react-router-dom';
import cxs from 'cxs';
import cxsComponent from 'cxs/component';
import { primary, primaryDark, bgColor } from './colors';

export * from './colors';

export const media = {
  medium: '@media screen and (max-width: 850px)',
  smallMedium: '@media screen and (max-width: 600px)',
  small: '@media screen and (max-width: 400px)',
  print: '@media print',
};

export const headingsFont = {
  fontFamily: '"Libre Baskerville", serif',
  fontWeight: '400',
};

export const bodyFont = {
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: '400',
};

export const H1 = cxsComponent('h1')({
  ...headingsFont,
  fontSize: '2rem',
  marginTop: '0',
  marginBottom: '1rem',
});

export const H2 = cxsComponent('h2')({
  ...headingsFont,
  fontSize: '1.8rem',
  marginTop: '0',
  marginBottom: '1rem',
});

export const H3 = cxsComponent('h3')({
  ...headingsFont,
  fontSize: '1.6rem',
  marginTop: '0',
  marginBottom: '1rem',
});

export const H4 = cxsComponent('h4')({
  ...headingsFont,
  fontSize: '1.4rem',
  marginTop: '0',
  marginBottom: '1rem',
});

export const H5 = cxsComponent('h5')({
  ...headingsFont,
  fontSize: '1.2rem',
  marginTop: '0',
  marginBottom: '1rem',
});

export const H6 = cxsComponent('h6')({
  ...headingsFont,
  fontSize: '1rem',
  marginTop: '0',
  marginBottom: '1rem',
});

export const Em = cxsComponent('em')({
  fontStyle: 'normal',
  fontWeight: '600',
});

export const linkStyles = {
  color: primaryDark,
  textDecoration: 'none',
  display: 'inline-block',
  position: 'relative',
  textShadow: `0.05em 0.04em 0 ${bgColor}, -0.05em 0.04em 0 ${bgColor}, 0.05em -0.04em 0 ${bgColor}, -0.05em -0.04em 0 ${bgColor}`,
  ':before': {
    content: '""',
    position: 'absolute',
    background: primary,
    height: '0.08em',
    width: '100%',
    left: '0',
    bottom: '0.35em',
    opacity: '0',
    zIndex: '-1',
    transform: 'scaleX(0.1)',
    transition: 'opacity 0.2s linear, transform 0.2s ease-in',
  },
  ':hover:before': {
    opacity: '1',
    transform: 'scaleX(1)',
    transition: 'opacity 0.2s linear, transform 0.2s ease-out',
  },
  [media.print]: {
    ':after': {
      content: '" (" attr(href) ")"',
    },
  },
};

export const link = cxs(linkStyles);

export const A = cxsComponent('a')(linkStyles);
export const Link = cxsComponent(RouterLink)(linkStyles);
export const ButtonLink = cxsComponent('button')({
  ...linkStyles,
  background: 'transparent',
  border: 'none',
  font: 'inherit',
  padding: '0',
  margin: '0',
  cursor: 'pointer',
});

export const Img = cxsComponent('img')({
  display: 'block',
  maxWidth: '100%',
  margin: 'auto',
  marginBottom: '1rem',
});
