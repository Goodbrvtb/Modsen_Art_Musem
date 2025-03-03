export const ARTWORKS_ENDPOINT = 'https://api.artic.edu/api/v1/artworks';

export const ARTWORKS_BY_ID_ENDPOINT = (id: number | string) =>
  `https://api.artic.edu/api/v1/artworks/${id}?`;

export const IMAGE_ENDPOINT = (id: number | string) =>
  `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;

export const SEARCH_ENDPOINT = (q: string) =>
  `${ARTWORKS_ENDPOINT}/search?q=${q}&query[term][is_public_domain]=true`;

export const FAVORITES_KEY = 'FAVORITES_KEY';

export const TIMEOUT = 1000;

export const FIELDS_OPTIONS =
  'image_id,id,title,artist_display,artist_title,is_public_domain,place_of_origin,dimensions,credit_line,is_on_view,gallery_title,date_start,date_end';

export const DEFAULT_OTHER_LIMIT = 9;

export const DEFAULT_SEARCH_LIMIT = 3;

export const PAGE_INCREMENT = 1;
