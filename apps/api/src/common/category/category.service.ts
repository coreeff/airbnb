import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { Category } from '@prisma/client';

import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
} from 'src/shared/decorators/pagination';
import { CategoryDto, UpdateCategoryDto } from './dto';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getAllCategories(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Category>> {
    try {
      const queryBuilder = this.prisma.read.category;
      const itemCount = await queryBuilder.count();

      const categories = await queryBuilder.findMany({
        skip: pageOptionsDto.skip,
        take: pageOptionsDto.take,
        orderBy: {
          created_at: pageOptionsDto.order,
        },
      });

      const pageMetaDto = new PageMetaDto({
        itemCount,
        pageOptionsDto,
      });

      return new PageDto(categories, pageMetaDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch categories');
    }
  }

  async createCategory(categoryDto: CategoryDto) {
    try {
      const isCategoryAvailable = await this.prisma.read.category.findFirst({
        where: { name: categoryDto.name },
      });

      if (isCategoryAvailable)
        throw new InternalServerErrorException('Category already exists');

      const category = await this.prisma.write.category.create({
        data: {
          ...categoryDto,
        },
      });

      return category;
    } catch (error) {
      throw new InternalServerErrorException('Failed to create category');
    }
  }

  async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category = await this.prisma.read.category.findUnique({
        where: { id },
      });

      if (!category) throw new NotFoundException('Category not found');

      const updatedCategory = await this.prisma.write.category.update({
        where: { id },
        data: {
          ...updateCategoryDto,
        },
      });

      return updatedCategory;
    } catch (error) {
      throw new InternalServerErrorException('Failed to update category');
    }
  }

  async deleteCategory(id: string) {
    try {
      const category = await this.prisma.read.category.findUnique({
        where: { id },
      });

      if (!category) throw new NotFoundException('Category not found');

      await this.prisma.write.category.delete({ where: { id } });

      return { message: 'Category deleted successfully' };
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete category');
    }
  }
}
