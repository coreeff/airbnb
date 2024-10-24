import * as winston from 'winston';

export const winstonLoggerOptions: winston.LoggerOptions = {
  // level: 'error', // Only log errors and higher (you can change this if needed)
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.printf(
      ({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`,
    ),
  ),
  transports: [
    new winston.transports.Console(), // Log to console
    new winston.transports.File({
      filename: 'logs/app.log', // Single file for all errors
      // level: 'error', // Only errors will be logged in this file
    }),
  ],
};
