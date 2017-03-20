import cxs, { cxsComponent } from './cxs';

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
});

export const H2 = cxsComponent('H2', {
  composes: headingsFont,
  fontSize: '1.8rem',
});

export const H3 = cxsComponent('H3', {
  composes: headingsFont,
  fontSize: '1.6rem',
});
