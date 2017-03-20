import cxs, { cxsComponent } from './cxs';
import { primaryDark, primaryDarker } from './colors';

export const headingsFont = cxs({
  fontFamily: '"Ovo", serif',
  fontWeight: 'normal',
});

export const bodyFont = cxs({
  fontFamily: '"Muli", sans-serif',
  fontWeight: 'normal',
});

export const H1 = cxsComponent('h1', {
  composes: headingsFont,
  fontSize: '2rem',
  marginTop: 0,
  marginBottom: '1rem',
});

export const H2 = cxsComponent('h2', {
  composes: headingsFont,
  fontSize: '1.8rem',
  marginTop: 0,
  marginBottom: '1rem',
});

export const H3 = cxsComponent('h3', {
  composes: headingsFont,
  fontSize: '1.6rem',
  marginTop: 0,
  marginBottom: '1rem',
});

export const link = cxs({
  color: primaryDark,
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'underline',
  },
  ':visited': {
    color: primaryDarker,
  },
});

export const A = cxsComponent('a', { composes: link });
