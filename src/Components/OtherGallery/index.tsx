import { FC } from 'react';
import './style.scss';
import { ArtWorkInfoCardOther } from '../ArtWorkInfoCartSmall';
import { OtherGalleryProps } from '../../utils/types';




export const OtherGallery: FC<OtherGalleryProps> = ({ otherArtWorks }) => {

  console.log(otherArtWorks, 'otherArtWorks')
  return (
    <>
      <div className="other-gallery">
        {otherArtWorks.map((artWork) => <ArtWorkInfoCardOther artWork={artWork} />)}
      </div>
    </>

  );
};
