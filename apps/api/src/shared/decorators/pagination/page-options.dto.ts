import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min, IsString } from 'class-validator';

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}

export class PageOptionsDto {
  @IsEnum(Order)
  @IsOptional()
  readonly order?: Order = Order.ASC;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  @IsOptional()
  readonly take?: number = 10;

  @IsOptional()
  @IsString()
  readonly search?: string;

  get skip(): number {
    return (this.page - 1) * this.take;
  }
}
