import { FC } from 'react';

import { checkFavorites } from '@utils/checkFavorites';
import { ArtWorkFullInfo } from '@utils/types';

import { ArtWorkInfoCardOther } from '../artWorkInfoCartSmall';
import './style.scss';

export interface OtherGalleryProps {
  isSelected: void;
  otherArtWorks: ArtWorkFullInfo[];
  favoritesIds: ArtWorkFullInfo[];
  handleFavoritesChange: (artwork: ArtWorkFullInfo) => void;
}

export const OtherGallery: FC<OtherGalleryProps> = ({
  favoritesIds,
  otherArtWorks,
  handleFavoritesChange,
}) => {
  return (
    <>
      <div className="other-gallery">
        {otherArtWorks.map((artWork) => (
          <ArtWorkInfoCardOther
            key={artWork.id}
            artWork={artWork}
            isSelected={checkFavorites(favoritesIds, artWork)}
            handleFavoritesChange={handleFavoritesChange}
          />
        ))}
      </div>
    </>
  );
};
