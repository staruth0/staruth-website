import express from 'express';
import helmet from 'helmet';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import compression from 'compression';
import cors from 'cors';
import passport from 'passport';
import httpStatus from 'http-status';
import config from './config/config.mjs';
import * as morgan from './config/morgan.mjs';
import { jwtStrategy } from './config/passport.mjs';
import { authLimiter } from './middlewares/rateLimiter.mjs';
import routes from './routes/v1/index.mjs';
import { errorConverter, errorHandler } from './middlewares/error.mjs';
import ApiError from './utils/ApiError.mjs';
import logger from './config/logger.mjs';
import sessionMiddleware from './middlewares/session.mjs';
import testimonialRouter from './routes/v1/testimonial.route.mjs';

const app = express();

app.disable('x-powered-by');

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.options('*', cors());

app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// Use session middleware imported from sessionMiddleware.mjs
app.use(sessionMiddleware);

if (config.env === 'production') {
  app.use('/v1/auth', authLimiter); 
}

app.use('/v1', routes);
app.use('/api/admin', adminRouter);
app.use('/api/cart', cartRouter);
app.use('/api/FAQ', FAQRouter);
app.use('/api/order', orderRouter);
app.use('/api/review', reviewRouter);
app.use('/api/testimonial', testimonialRouter);
app.use('/api/payment', paymentRouter);
app.use('/api/chat', chatRouter);
app.use('/api/message', messageRouter);


app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);

export default app;