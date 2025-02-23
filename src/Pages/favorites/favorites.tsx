import FavoritesIcon from '@assets/icons/favorites-icon.svg';
import { ArtWorkInfoCardOther } from '@components/ArtWorkInfoCartSmall';
import { Footer } from '@components/Footer/index';
import { Header } from '@components/Header';
import { SectionTitle } from '@components/SectionTitle';
import { Title } from '@components/Title';

import { checkFavorites } from '@/utils/checkFavorites';
import { useHandleFavIdChange } from '@/utils/hooks/useHandleFavIdChange';
import { ArtWork } from '@/utils/types';

export function FavoritesPage() {
  const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange();
  const lengthFavoritesIds = favoritesIds.length;

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Title
          title={
            <>
              Here Are Your <br />
              <span>
                <img className="icon" src={FavoritesIcon} alt="dots icon"></img>
                Favorites!
              </span>
            </>
          }
        />
        {lengthFavoritesIds ? (
          <SectionTitle
            className="body-title body-title-favorite"
            title={
              <>
                <span>Saved by you</span> <br />
                Your favorites list
              </>
            }
          />
        ) : (
          <div className="other-gallery">
            <Title
              title={
                <>
                  There are no favorites in your gallery. To add to favorites,
                  click the bookmark icon on the picture.{' '}
                </>
              }
            />
          </div>
        )}
        <div className="other-gallery">
          {favoritesIds.map((artWork) => (
            <ArtWorkInfoCardOther
              artWork={artWork}
              handleFavoritesChange={handleFavoritesChange}
              isSelected={checkFavorites(favoritesIds, artWork)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
