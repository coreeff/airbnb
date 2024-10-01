import { Category } from '@prisma/client';

import {
  Get,
  Body,
  Param,
  Patch,
  Post,
  Query,
  Delete,
  Controller,
} from '@nestjs/common';

import { CategoryService } from './category.service';
import { CategoryDto, UpdateCategoryDto } from './dto';
import { PageDto, PageOptionsDto } from 'src/shared/decorators/pagination';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/all')
  getCategories(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<Category>> {
    return this.categoryService.getAllCategories(pageOptionsDto);
  }

  @Post()
  createCategory(@Body() categoryDto: CategoryDto) {
    return this.categoryService.createCategory(categoryDto);
  }

  @Patch(':id')
  async updateCategory(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return this.categoryService.updateCategory(id, updateCategoryDto);
  }

  @Delete(':id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoryService.deleteCategory(id);
  }
}
