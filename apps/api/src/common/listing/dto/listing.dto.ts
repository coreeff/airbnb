import {
  IsDate,
  IsUUID,
  IsArray,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';

export class ListingDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @IsNotEmpty()
  bedrooms: number;

  @IsNumber()
  @IsNotEmpty()
  bathrooms: number;

  @IsNumber()
  @IsNotEmpty()
  sqft: number;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  availability_to: Date;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  availability_from: Date;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsArray()
  @IsOptional()
  images?: ListingImageDto[];

  @IsNumber()
  @IsOptional()
  average_rating?: number;

  @IsString()
  @IsOptional()
  categoryId?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;
}

export class ListingImageDto {
  @IsString()
  @IsNotEmpty()
  url: string;
}

export class UpdateListingDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  category?: string;

  @IsNumber()
  @IsOptional()
  bedrooms?: number;

  @IsNumber()
  @IsOptional()
  bathrooms?: number;

  @IsNumber()
  @IsOptional()
  sqft?: number;

  @IsDate()
  @Type(() => Date)
  @IsOptional()
  availability?: Date;

  @IsString()
  @IsOptional()
  location?: string;

  @IsArray()
  @IsOptional()
  images?: ListingImageDto[];

  @IsNumber()
  @IsOptional()
  average_rating?: number;

  @IsString()
  @IsOptional()
  categoryId?: string;

  @IsUUID()
  @IsOptional()
  userId?: string;
}

export class UpdateListingImageDto {
  @IsString()
  @IsOptional()
  url?: string;
}
