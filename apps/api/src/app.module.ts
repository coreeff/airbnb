import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './core/auth/auth.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { UploadModule } from './common/upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UploadModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
