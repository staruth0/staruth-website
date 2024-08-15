import express from 'express';
import reviewRoute from './review.route.mjs';
import testimonialRoute from './testimonial.route.mjs';
import docsRoute from './docs.route.mjs';
import config from '../../config/config.mjs';
import heroRoutes from './hero.route.mjs'

const router = express.Router();

const defaultRoutes = [
  
  {
    path: '/hero',
    route: heroRoutes,
  },
  
  {
    path: '/review',
    route: reviewRoute,
  },
  {
    path: '/testimonial',
    route: testimonialRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach(({ path, route }) => {
  router.use(path, route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach(({ path, route }) => {
    router.use(path, route);
  });
}

export default router;