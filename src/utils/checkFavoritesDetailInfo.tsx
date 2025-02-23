import { ArtWork } from './types';

export const checkFavoritesDetailInfo = (
  favorites: ArtWork[],
  id: string,
): boolean => {
  return favorites.some((artwork) => artwork.id.toString() === id);
};
