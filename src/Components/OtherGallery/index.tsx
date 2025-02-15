import { FC } from 'react';

import { OtherGalleryProps } from '@utils/types';

import { ArtWorkInfoCardOther } from '../ArtWorkInfoCartSmall';
import './style.scss';

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
            artWork={artWork}
            isSelected={favoritesIds.some((item) => item.id === artWork.id)}
            handleFavoritesChange={handleFavoritesChange}
          />
        ))}
      </div>
    </>
  );
};
