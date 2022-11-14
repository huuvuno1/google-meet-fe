//Layout
import NoFooterLayout from 'app/layouts/NoFooterLayout';
import { Home } from 'app/pages/Home';
import { Introduction } from 'app/pages/Introduction';
import { Meeting } from 'app/pages/Meeting';

import { PublicRoutes } from './types';

//Public routes
const publicRoutes: PublicRoutes[] = [
  {
    path: '/',
    component: Meeting,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/introduction',
    component: Introduction,
  },
  {
    path: '/no-footer',
    component: Introduction,
    layout: NoFooterLayout,
  },
  {
    path: '/meeting',
    component: Introduction,
  },
];

export { publicRoutes };
