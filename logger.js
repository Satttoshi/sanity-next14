import winston from 'winston';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  level: 'error',
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export default logger;
