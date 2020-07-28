import winston from 'winston';
import { Config } from '../../config';

const logger = winston.createLogger({
  level: Config.NODE_ENV === 'local' ? 'debug' : 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console({
      level: 'debug',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
    }),
    new winston.transports.File({
      filename: './logs/info.log',
      level: 'info',
    }),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
  ],
});

export { logger };
