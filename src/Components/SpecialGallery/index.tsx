import { FC } from 'react';
import { SectionTitle } from '../SectionTitle/index';
import './style.scss';
import { SpecialGalleryProps } from '../../utils/types';
import { ArtWorkInfoCard } from '../ArtWorkInfoCard';


export const SpecialGallery: FC<SpecialGalleryProps> = ({ artWorks }) => {
  return (
    <>
      <SectionTitle title={<><span>Topics for you</span> <br />Our special gallery!</>} />
      <div className="special-gallery">
        {artWorks.map((artWork) => <ArtWorkInfoCard artWork={artWork} />)}
      </div>
    </>

  );
};
