import { FC } from 'react';
import './style.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface OtherGalleryProps { artWorks: any[] }


export const OtherGallery:FC<OtherGalleryProps> = ({ artWorks }) => {
  console.log(artWorks, 'artWorks')
  const limitArtWorks = artWorks.slice(0,9)
  return (
  <>
      <div className="other-gallery">
        {limitArtWorks.map((artWork) => {
          return (<div className='other-gallery-card'>{artWork.title}
          </div>)
          })}
      </div>
      </>

  );
};
