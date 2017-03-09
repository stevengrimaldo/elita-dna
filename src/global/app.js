const components = [
  'header',
  'hero',
  'featured-content',
  'resources',
  'profile',
  'footer'
];

const componentLength = components.length;

function loadCss(name) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/css/components/' + name + '/' + name + '.min.css';
  document.getElementsByTagName('head')[0].appendChild(link);
}

for (let i = 0; i < componentLength; i++) {
  if (typeof(document.querySelector('.' + components[i])) !== 'undefined' && document.querySelector('.' + components[i]) !== null) {
    loadCss(components[i]);
  }
}
