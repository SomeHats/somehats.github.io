export default component => {
  if (typeof component === 'string') return component;
  return component.displayName || component.name || 'Component';
};
