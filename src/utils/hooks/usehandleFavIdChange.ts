import { useEffect, useState } from 'react';

import { FAVORITES_KEY } from '../../constants/api';

export const useHandleFavIdChange = () => {
  const [favoritesIds, setFavoritesIds] = useState<any>([]);

  function handleFavoritesChange(artWork: {
    id: number;
    title: string;
    imageUrl: string;
    artist_display: string;
    is_public_domain: boolean;
    artist_title: string;
  }) {
    const favoritesIdsCurrent = [...favoritesIds];
    const filteredFavoritesIds = favoritesIdsCurrent.filter(
      (item) => item.id !== artWork.id,
    );
    if (
      favoritesIdsCurrent.length == 0 ||
      favoritesIdsCurrent.length == filteredFavoritesIds.length
    ) {
      setFavoritesIds(
        (
          prev: {
            id: number;
            title: string;
            imageUrl: string;
            artist_display: string;
            is_public_domain: boolean;
            artist_title: string;
          }[],
        ) => {
          return [...prev, artWork];
        },
      );
      filteredFavoritesIds.push(artWork);
    } else {
      setFavoritesIds(filteredFavoritesIds);
    }
    sessionStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredFavoritesIds));
  }

  useEffect(() => {
    const existedFavoritesIds = sessionStorage.getItem(FAVORITES_KEY);
    if (existedFavoritesIds) {
      setFavoritesIds(JSON.parse(existedFavoritesIds));
    }
  }, []);

  return { favoritesIds, handleFavoritesChange };
};
