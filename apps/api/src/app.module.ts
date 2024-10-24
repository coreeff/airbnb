import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AuthModule } from './core/auth/auth.module';
import { PrismaModule } from './shared/prisma/prisma.module';
import { UploadModule } from './common/upload/upload.module';
import { CategoryService } from './common/category/category.service';
import { CategoryModule } from './common/category/category.module';
import { ListingModule } from './common/listing/listing.module';
import { CustomLoggerService } from './shared/logger/logger.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        () => ({
          DATABASE_URL: process.env.DATABASE_URL,
          READ_DATABASE_URL:
            process.env.READ_DATABASE_URL || process.env.DATABASE_URL, // fallback to main DB if read DB not specified
        }),
      ],
    }),
    AuthModule,
    PrismaModule,
    UploadModule,
    CategoryModule,
    ListingModule,
  ],
  providers: [AppService, CategoryService, CustomLoggerService],
  controllers: [AppController],
})
export class AppModule {}
