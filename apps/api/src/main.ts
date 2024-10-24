import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
// import { CustomLoggerService } from 'src/shared/logger/logger.service';

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // const customLogger = app.get(CustomLoggerService);
  // app.useLogger(customLogger);

  await app.listen(PORT);
}
bootstrap();
