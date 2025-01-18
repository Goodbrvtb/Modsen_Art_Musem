export const ARTWORKS_ENDPOINT = "https://api.artic.edu/api/v1/artworks";

export const ARTWORKS_BY_ID_ENDPOINT = (id: number | string) =>
    `https://api.artic.edu/api/v1/artworks/${id}?`;
//добавить не хватающих данных для карточки

export const IMAGE_ENDPOINT = (id: number | string) =>
    `https://www.artic.edu/iiif/2/${id}/full/full/0/default.jpg`;

export const SEARCH_ENDPOINT = (/*size: number,*/ q: string) =>
    `${ARTWORKS_ENDPOINT}/search?q=${q}&query[term][is_public_domain]=true`;

export const FAVORITES_KEY = 'FAVORITES_KEY'

export const FALL_BACK_SRC = "../assets/logos/imageDefault.svg"