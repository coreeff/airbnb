import { Module } from '@nestjs/common';
import { ListingController } from './listing.controller';
import { ListingService } from './listing.service';
import { CustomLoggerService } from 'src/shared/logger/logger.service';

@Module({
  controllers: [ListingController],
  providers: [ListingService, CustomLoggerService],
})
export class ListingModule {}
