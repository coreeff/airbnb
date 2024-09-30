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

export type Property = {
  id: number;
  documentId: string;
  location: string;
  price: number;
  rating: number;
  image_url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  date_from: string;
  date_to: string;
};

type Meta = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type RoomsType = {
  data: Property[];
  meta: Meta;
};
