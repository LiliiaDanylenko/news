export interface INews {
  author: string;
  category: CategoryType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoriesApiResponse {
  categories: CategoryType[];
  description: string;
  status: string;
}

export interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleChangePage: (page: number) => void;
}

export type SkeletonType = 'banner' | 'item';
export type DirectionType = 'row' | 'column';

export interface IFilters {
  page_number: number;
  page_size: any;
  category: CategoryType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type CategoryType = string;
