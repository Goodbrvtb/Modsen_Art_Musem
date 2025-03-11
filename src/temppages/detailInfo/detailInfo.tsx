import { DetailCart } from '@/tempcomponents/detailInfo';
import { Footer } from '@/tempcomponents/tempfooter/index';
import { Header } from '@/tempcomponents/tempheader';

import { useParams } from 'react-router-dom';

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
