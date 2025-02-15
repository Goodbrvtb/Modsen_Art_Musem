import { useParams } from 'react-router-dom';

import { DetailCart } from '@components/DetailInfo';
import { Footer } from '@components/Footer/index';
import { Header } from '@components/Header';
import { useHandleFavIdChange } from '@utils/hooks/useHandleFavIdChange';

export function DetailInfo() {
  const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange();
  const { id } = useParams();
  return (
    <div>
      <Header />
      <DetailCart
        favoritesIds={favoritesIds}
        handleFavoritesChange={handleFavoritesChange}
        isSelected={favoritesIds.some(
          (item: {
            id: number;
            title: string;
            imageUrl: string;
            artist_display: string;
            is_public_domain: boolean;
            artist_title: string;
          }) => item.id === Number(id),
        )}
      />
      <Footer />
    </div>
  );
}
