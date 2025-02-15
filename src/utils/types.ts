export interface ArtWorkType {
  data: {
    image_id: string;
    id: number;
    title: string;
    artist_display: string;
    is_public_domain: boolean;
  };
}

export interface SearchArtWorkType {
  data: { id: number }[];
  pagination: {
    current_page: number;
    total_pages: number;
  };
}

export interface UseArtWorksApiAxiosProps {
  searchValue: string;
  selectedPage: number;
}

export interface OtherGalleryProps {
  otherArtWorks: any[];
  favoritesIds: {
    id: number;
    title: string;
    imageUrl: string;
    artist_display: string;
    is_public_domain: boolean;
    artist_title: string;
  }[];
  handleFavoritesChange: (artwork: {
    id: number;
    title: string;
    imageUrl: string;
    artist_display: string;
    is_public_domain: boolean;
    artist_title: string;
  }) => void;
}

export interface UseArtWorkApiAxiosProps {
  id: number;
}
