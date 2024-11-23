import { FC } from 'react';
import './style.scss';
import { OtherGalleryProps } from '../../utils/types';





export const OtherGallery: FC<OtherGalleryProps> = ({ otherArtWorks }) => {
  console.log(otherArtWorks, 'otherArtWorks')
  return (
    <>
      <div className="other-gallery">
        {otherArtWorks.map((artWork) => {
          return (<div className='other-gallery-card'>
            <img title='test' src={artWork.imageUrl} />
          </div>)
        })}
      </div>
    </>

  );
};
