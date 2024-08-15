import session from 'express-session';
import connectMongo from 'connect-mongodb-session';
import logger from '../config/logger.mjs';
import config from '../config/config.mjs';

const MongoDBStore = connectMongo(session);

// Establish session middleware
const mongoDBStoreInstance = new MongoDBStore({
  uri: `${config.mongoose.url}${config.mongoose.databaseName}`,
  collection: 'sessions',
  ttl: parseInt(config.session.lifeTime / 1000), // Convert lifetime to seconds
});

// Event handler for successful session store connection
mongoDBStoreInstance.on('connected', () => {
  logger.info('Session store connected');
});

// Event handler for session store connection error
mongoDBStoreInstance.on('error', (error) => {
  console.error('Session store connection error:', error);
});

const sessionMiddleware = session({
  secret: config.session.secret,
  resave: false,
  saveUninitialized: false,
  store: mongoDBStoreInstance,
  cookie: {
    maxAge: config.session.lifeTime, // Set session expiration time
  },
});
export default sessionMiddleware;
