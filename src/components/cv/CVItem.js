import { cxsComponent } from '../../lib/cxs';
import { bgColor, primary } from '../../lib/colors';
import { headingsFont, H5 } from '../../lib/styles';

export const CVSection = cxsComponent('section', {
  paddingTop: '1rem',
});

export const CVItem = cxsComponent('article', {
  textAlign: 'justify',
  paddingBottom: '1rem',
  pageBreakInside: 'avoid',
});

export const ItemName = cxsComponent(H5, {
  float: 'left',
  marginBottom: 0,
});

export const ItemDate = cxsComponent('time', {
  composes: headingsFont,
  float: 'right',
  display: 'block',
  opacity: 0.5,
  fontStyle: 'italic',
  paddingTop: '0.2rem',
});

export const ItemDesc = cxsComponent('div', {
  clear: 'both',
  marginTop: '-1rem',
  marginBottom: '1rem',
});

export const TagList = cxsComponent('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
});

export const Tag = cxsComponent('li', {
  display: 'inline-block',
  color: bgColor,
  background: primary,
  marginRight: '0.5rem',
  marginBottom: '0.5rem',
  padding: '0 0.5rem',
  opacity: 0.8,
  fontSize: '0.8rem',
});

