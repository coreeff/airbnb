import { Listing } from '@prisma/client';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from 'src/shared/decorators/pagination';
import { ListingDto, UpdateListingDto } from './dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class ListingService {
  constructor(private prisma: PrismaService) {}

  async getListings(pageOptionsDto: PageOptionsDto): Promise<PageDto<Listing>> {
    try {
      const queryBuilder = this.prisma.read.listing;
      const itemCount = await queryBuilder.count();

      const listings = await queryBuilder.findMany({
        skip: pageOptionsDto.skip,
        take: pageOptionsDto.take,
        orderBy: {
          created_at: pageOptionsDto.order,
        },

        include: {
          images: true,
        },
      });

      const pageMetaDto = new PageMetaDto({
        itemCount,
        pageOptionsDto,
      });

      return new PageDto(listings, pageMetaDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch categories');
    }
  }

  async getListingById(id: string): Promise<Listing> {
    const listing = await this.prisma.read.listing.findUnique({
      where: { id },
    });

    if (!listing) {
      throw new NotFoundException(`Listing with ID ${id} not found`);
    }

    return listing;
  }

  async createListing(listingDto: ListingDto): Promise<Listing> {
    try {
      return await this.prisma.write.listing.create({
        data: {
          ...listingDto,
          availability_to: new Date(listingDto.availability_to), // Convert string to Date
          availability_from: new Date(listingDto.availability_from), // Convert string to Date
          images: {
            create: listingDto.images?.map((image) => ({
              url: image.url,
            })),
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  async editListing(
    id: string,
    updateListingDto: UpdateListingDto,
  ): Promise<Listing> {
    try {
      const listing = await this.prisma.read.listing.findUnique({
        where: { id },
      });

      if (!listing) {
        throw new NotFoundException(`Listing with ID ${id} not found`);
      }

      return await this.prisma.write.listing.update({
        where: { id },
        data: {
          ...updateListingDto,
          images: {
            create: updateListingDto.images?.map((image) => ({
              url: image.url,
            })),
          },
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to update listing');
    }
  }

  async deleteListing(id: string): Promise<Listing> {
    try {
      const listing = await this.prisma.read.listing.findUnique({
        where: { id },
      });

      if (!listing) {
        throw new NotFoundException(`Listing with ID ${id} not found`);
      }

      return await this.prisma.write.listing.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete listing');
    }
  }
}
