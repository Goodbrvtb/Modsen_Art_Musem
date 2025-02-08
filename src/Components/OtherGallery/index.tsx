import { FC } from 'react';
import './style.scss';
import { ArtWorkInfoCardOther } from '../ArtWorkInfoCartSmall';
import { OtherGalleryProps } from '@utils/types';



export const OtherGallery: FC<OtherGalleryProps> = ({ favoritesIds, otherArtWorks, handleFavoritesChange }) => {

  return (
    <>
      <div className="other-gallery">
        {otherArtWorks.map((artWork) => <ArtWorkInfoCardOther
          artWork={artWork}
          isSelected={favoritesIds.some(item => item.id === artWork.id)}
          handleFavoritesChange={handleFavoritesChange} />)}
      </div>
    </>

  );
};
