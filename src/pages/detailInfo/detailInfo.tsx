import { useParams } from 'react-router-dom';

import { DetailCart } from '@/components/detailInfo';
import { Footer } from '@/components/footer/index';
import { Header } from '@/components/header';

import { checkFavoritesDetailInfo } from '@/utils/checkFavoritesDetailInfo';
import { useHandleFavIdChange } from '@/utils/hooks/useHandleFavIdChange';

export function DetailInfo() {
  const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <>
        <Header />
        <div>Error: Artwork ID not specified</div>;
        <Footer />
      </>
    );
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
