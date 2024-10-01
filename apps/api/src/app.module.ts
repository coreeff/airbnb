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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PrismaModule,
    UploadModule,
    CategoryModule,
    ListingModule,
  ],
  providers: [AppService, CategoryService],
  controllers: [AppController],
})
export class AppModule {}
