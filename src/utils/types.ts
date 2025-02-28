export interface ImageFallback {
  imgSrc: string;
}

export type Timer = ReturnType<typeof setTimeout>;
export type SomeFunction<T> = (...args: T[]) => void;

export type SortType = 'asc' | 'desc' | 'oldToNew' | 'newToOld' | 'default';

export interface PaginationProps {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

export interface ArtWorkFullInfo extends ArtWork {
  imageUrl: string;
}
export interface ArtWork {
  artist_display: string;
  artist_title: string;
  credit_line: string;
  date_end: number;
  date_start: number;
  dimensions: string;
  gallery_title: string;
  id: number;
  image_id: string;
  is_on_view: boolean;
  is_public_domain: boolean;
  place_of_origin: string;
  title: string;
}

export interface SearchArtWorkType {
  data: ArtWork[];
  pagination: {
    current_page: number;
    total_pages: number;
  };
}

export interface UseArtWorksApiAxiosProps {
  searchValue: string;
  selectedPage: number;
}

export interface UseArtWorkApiAxiosProps {
  id: number;
}
