import createRouter from 'router5';
import browserPlugin from 'router5-plugin-browser';

const routes = [
  { name: 'home', path: '/?monsterType&monsterCategory&anima&freeword&has_accessory' },
  { name: 'about', path: '/about' }
];

export const router = createRouter(routes, {
  arrayFormat: 'none',
  nullFormat: 'hidden'
});

router.usePlugin(browserPlugin());

router.start();
