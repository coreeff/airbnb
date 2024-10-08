import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface OptionsI {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

// export type Property = {
//   id: number;
//   documentId: string;
//   location: string;
//   price: number;
//   rating: number;
//   image_url: string;
//   createdAt: string;
//   updatedAt: string;
//   publishedAt: string;
//   locale: string | null;
//   date_from: string;
//   date_to: string;
// };

export type Property = {
  id: string;
  title: string;
  description: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  location: number;
  availability_to: Date;
  availability_from: Date;
  average_rating: boolean;
  created_at: Date;
  updated_at: Date;
  categoryId: string;
  userId: string;
  images: Images[];
};

type Images = {
  id: string;
  url: string;
  created_at: Date;
  updated_at: Date;
  listingId: string;
};

type Meta = {
  itemCount: number;
  pageCount?: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export type RoomsType = {
  data: Property[];
  meta: Meta;
};
