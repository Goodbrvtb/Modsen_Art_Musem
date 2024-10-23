export const ARTWORKS_ENDPOINT = "https://api.artic.edu/api/v1/artworks";
export const IMAGE_ENDPOINT = (id: number | string) =>
    `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;

export const SEARCH_ENDPOINT = (/*size: number,*/ q: string) =>
    `${ARTWORKS_ENDPOINT}/search?q=${q}`;