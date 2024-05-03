import { lazy } from 'react';
const Home = lazy(() => import('@/pages/Home'));
const Checkout = lazy(() => import('@/pages/Checkout'));
export const appRoutes = [{
  path: '/',
  name: 'home',
  element: <Home />
},
  {
    path: '/checkout',
    name: 'checkout',
    element: <Checkout />
  }];