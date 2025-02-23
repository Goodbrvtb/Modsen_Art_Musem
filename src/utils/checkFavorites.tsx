import { ArtWork } from './types';

export const checkFavorites = (favoritesIds: ArtWork[], artWork: ArtWork) => {
  return favoritesIds.some((item) => item.id === artWork.id);
};
