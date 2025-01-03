import { FC } from 'react';
import { SectionTitle } from '../SectionTitle/index';
import './style.scss';
import { ArtWorkInfoCard } from '../ArtWorkInfoCard';

interface SpecialGalleryProps {
  artWorks: any[],
  favoritesIds: number[],
  handleFavoritesChange: (id: number) => void
}

export const SpecialGallery: FC<SpecialGalleryProps> = ({ artWorks, favoritesIds, handleFavoritesChange }) => {
  return (
    <>
      <SectionTitle title={<><span>Topics for you</span> <br />Our special gallery!</>} />
      <div className="special-gallery">
        {artWorks.map((artWork) => <ArtWorkInfoCard artWork={artWork}
          handleFavoritesChange={handleFavoritesChange}
          isSelected={favoritesIds.some(item => item === artWork.id)} />)}
      </div>
    </>

  );
};
