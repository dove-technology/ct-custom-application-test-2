import { lazy } from 'react';

const Discounts = lazy(
  () => import('./discounts' /* webpackChunkName: "discounts" */)
);

export default Discounts;
