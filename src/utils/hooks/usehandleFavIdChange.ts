import { FAVORITES_KEY } from '@/constants/api';

import { useEffect, useState } from 'react';

import { ArtWorkFullInfo } from '../types';

export const useHandleFavIdChange = () => {
  const [favoritesIds, setFavoritesIds] = useState<ArtWorkFullInfo[]>([]);

  function handleFavoritesChange(artWork: ArtWorkFullInfo) {
    const favoritesIdsCurrent = [...favoritesIds];
    const filteredFavoritesIds = favoritesIdsCurrent.filter(
      (item) => item.id !== artWork.id,
    );
    if (
      favoritesIdsCurrent.length == 0 ||
      favoritesIdsCurrent.length == filteredFavoritesIds.length
    ) {
      setFavoritesIds((prev) => {
        return [...prev, artWork];
      });
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
