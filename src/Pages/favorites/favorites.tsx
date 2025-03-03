import FavoritesIcon from '@assets/icons/favorites-icon.svg';

import { ArtWorkInfoCardOther } from '@/components/artWorkInfoCartSmall';
import { Footer } from '@/components/footer/index';
import { Header } from '@/components/header';
import { SectionTitle } from '@/components/sectionTitle';
import { Title } from '@/components/title';

import { checkFavorites } from '@/utils/checkFavorites';
import { useHandleFavIdChange } from '@/utils/hooks/useHandleFavIdChange';

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
