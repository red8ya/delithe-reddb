import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

const routes = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' }
];

export const router = createRouter(routes);

router.usePlugin(browserPlugin());

router.start();
