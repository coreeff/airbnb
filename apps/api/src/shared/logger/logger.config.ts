import * as winston from 'winston';
import 'winston-daily-rotate-file';

export const winstonLoggerOptions: winston.LoggerOptions = {
  level: 'info', // Log level (info, error, warn, etc.)
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`,
    ),
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.DailyRotateFile({
      filename: 'logs/application-%DATE%.log', // Log with date rotation
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
};
