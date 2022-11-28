//Layout
import NoFooterLayout from 'app/layouts/NoFooterLayout';
import ScreenLayout from 'app/layouts/ScreenLayout';
import { Home } from 'app/pages/Home';
import { Introduction } from 'app/pages/Introduction';
import { Meeting } from 'app/pages/Meeting';

import { PublicRoutes } from './types';

//Public routes
const publicRoutes: PublicRoutes[] = [
  {
    path: '/',
    component: Home,
    layout: ScreenLayout,
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
    path: '/meet',
    component: Meeting,
    layout: ScreenLayout,
  },
];

export { publicRoutes };
