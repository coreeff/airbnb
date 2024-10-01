import { Listing } from '@prisma/client';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { ListingService } from './listing.service';
import { ListingDto, UpdateListingDto } from './dto';
import { PageDto, PageOptionsDto } from 'src/shared/decorators/pagination';

@Controller('listing')
export class ListingController {
  constructor(private listingService: ListingService) {}

  @Get()
  getListings(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Listing>> {
    return this.listingService.getListings(pageOptionsDto);
  }

  @Get(':id')
  getListingById(@Param('id') id: string) {
    return this.listingService.getListingById(id);
  }

  @Post()
  createListing(@Body() listingDto: ListingDto) {
    return this.listingService.createListing(listingDto);
  }

  @Patch(':id')
  editListing(
    @Param('id') id: string,
    @Body() updateListingDto: UpdateListingDto,
  ): Promise<Listing> {
    return this.listingService.editListing(id, updateListingDto);
  }

  @Delete(':id')
  deleteListing(@Param('id') id: string): Promise<Listing> {
    return this.listingService.deleteListing(id);
  }
}
