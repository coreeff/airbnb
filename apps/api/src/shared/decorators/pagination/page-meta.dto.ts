import { PageOptionsDto } from './page-options.dto';

export class PageMetaDto {
  readonly page: number;
  readonly take: number;
  readonly itemCount: number;
  readonly pageCount: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;

  constructor({
    itemCount,
    pageOptionsDto,
  }: {
    itemCount: number;
    pageOptionsDto: PageOptionsDto;
  }) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;
    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
