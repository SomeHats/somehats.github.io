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

export const ItemHead = cxsComponent('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  paddingBottom: '0.5rem',
});

export const ItemName = cxsComponent(H5, {
  marginBottom: 0,
  marginRight: '1rem',
  flex: '1 0 auto',
});

export const ItemDate = cxsComponent('time', {
  composes: headingsFont,
  display: 'block',
  flex: '0 1 auto',
  opacity: 0.5,
  fontStyle: 'italic',
});

export const ItemDesc = cxsComponent('div', {
  clear: 'both',
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

