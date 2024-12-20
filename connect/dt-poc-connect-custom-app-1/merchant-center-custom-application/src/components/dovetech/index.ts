import { lazy } from 'react';

const Dovetech = lazy(
  () => import('./dovetech' /* webpackChunkName: "dovetech" */)
);

export default Dovetech;
