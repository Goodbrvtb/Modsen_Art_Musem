import { useParams } from 'react-router-dom';

import { DetailCart } from '@components/DetailInfo';
import { Footer } from '@components/Footer/index';
import { Header } from '@components/Header';

import { checkFavoritesDetailInfo } from '@/utils/checkFavoritesDetailInfo';
import { useHandleFavIdChange } from '@/utils/hooks/useHandleFavIdChange';

export function DetailInfo() {
  const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Error: Artwork ID not specified</div>;
  }

  return (
    <div>
      <Header />
      <DetailCart
        favoritesIds={favoritesIds}
        handleFavoritesChange={handleFavoritesChange}
        isSelected={checkFavoritesDetailInfo(favoritesIds, id)}
      />
      <Footer />
    </div>
  );
}
