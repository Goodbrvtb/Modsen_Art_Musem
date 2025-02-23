import { FC } from 'react';

import { checkFavorites } from '@/utils/checkFavorites';
import { ArtWork, ArtWorkFullInfo } from '@/utils/types';

import { ArtWorkInfoCard } from '../ArtWorkInfoCard';
import { SectionTitle } from '../SectionTitle/index';
import './style.scss';

interface SpecialGalleryProps {
  artWorks: ArtWorkFullInfo[];
  favoritesIds: ArtWorkFullInfo[];
  handleFavoritesChange: (artwork: ArtWorkFullInfo) => void;
}

export const SpecialGallery: FC<SpecialGalleryProps> = ({
  artWorks,
  favoritesIds,
  handleFavoritesChange,
}) => {
  return (
    <>
      <SectionTitle
        title={
          <>
            <span>Topics for you</span> <br />
            Our special gallery!
          </>
        }
      />
      {artWorks.length ? (
        <div className="special-gallery">
          {artWorks.map((artWork) => (
            <ArtWorkInfoCard
              artWork={artWork}
              handleFavoritesChange={handleFavoritesChange}
              isSelected={checkFavorites(favoritesIds, artWork)}
            />
          ))}
        </div>
      ) : (
        <SectionTitle title={<>Nothing found!</>} />
      )}
    </>
  );
};
