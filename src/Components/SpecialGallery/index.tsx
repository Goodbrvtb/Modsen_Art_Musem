import { FC } from 'react';
import { SectionTitle } from '../SectionTitle/index';
import './style.scss';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SpecialGalleryProps { artWorks: any[] }


export const SpecialGallery: FC<SpecialGalleryProps> = ({ artWorks }) => {
  console.log(artWorks, 'WITH IMAGE!!!')
  const limitArtWorks = artWorks.slice(0, 3)
  return (
    <>
      <SectionTitle title={<><span>Topics for you</span> <br />Our special gallery!</>} />
      <div className="special-gallery">
        {limitArtWorks.map((artWork) => {
          return (
            // <ArtWorkCard artWork={artWork}/> //Добавить реализацию компонента
            <div className='special-gallery-card' >
              <img title='test' src={artWork.imageUrl} />
            </div>
            )
        })}
      </div>
    </>

  );
};
