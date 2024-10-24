import { Injectable } from '@nestjs/common';
import * as winston from 'winston';
import { winstonLoggerOptions } from './logger.config'; // Import your config

@Injectable()
export class CustomLoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger(winstonLoggerOptions);
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, trace?: string) {
    this.logger.error(message, trace);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }
}
