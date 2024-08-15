import mongoose from 'mongoose';
import app from './app.mjs';
import config from './config/config.mjs';
import logger from './config/logger.mjs';

let server;
const connection=mongoose.connect(config.mongoose.url + config.mongoose.databaseName, config.mongoose.options)
  .then(() => {
    logger.info('Connected to MongoDB database: ' + config.mongoose.databaseName);
    server = app.listen(config.port, () => {
      logger.info(`Listening to port ${config.port}`);
    }); 
  })
  .catch(error => {
    logger.error('MongoDB connection error:', error);
    process.exit(1); 
  });
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
