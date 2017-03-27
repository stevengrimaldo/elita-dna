const components = [
  'header',
  'hero',
  'featured-content',
  'resources',
  'profile',
  'solutions',
  'reviews',
  'accordion',
  'split-content',
  'documents',
  'articles',
  'locations',
  'team',
  'tools',
  'footer'
];

const componentLength = components.length;

function loadCss(name) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/css/components/' + name + '/' + name + '.min.css';
  document.getElementsByTagName('head')[0].appendChild(link);
}

function loadJs(name) {
  const script = document.createElement('script');
  script.src = '/js/components/' + name + '.js';
  document.getElementById('scripts').appendChild(script);
}

function loadComponent(name) {
  loadCss(name);
  loadJs(name);
}

for (let i = 0; i < componentLength; i++) {
  if (typeof(document.querySelector('.' + components[i])) !== 'undefined' && document.querySelector('.' + components[i]) !== null) {
    loadComponent(components[i]);
  }
}
