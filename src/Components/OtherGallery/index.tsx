import { FC } from 'react';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface OtherGalleryProps { otherArtWorks: any[] }


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
