import { FC, MouseEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import fallBackSrc from '@assets/images/image-default.svg';
import { FavoritesIcon } from '@components/FavoritesIcon';
import { useArtWorkApiAxios } from '@utils/hooks/useGetDetailInfo';
import { useImageFallback } from '@utils/hooks/useImageFallback';
import { useSkeleton } from '@utils/hooks/useSkeleton';

import { ArtWork, ArtWorkFullInfo } from '@/utils/types';

import { CustomSkeleton } from '../Skeleton';
import './style.scss';

interface DetailCartProps {
  isSelected: boolean;
  handleFavoritesChange: (artwork: ArtWorkFullInfo) => void;

  favoritesIds: ArtWork[];
}

export const DetailCart: FC<DetailCartProps> = ({
  isSelected,
  handleFavoritesChange,
}) => {
  const { id } = useParams();

  const [artWork, setArtWork] = useState<ArtWorkFullInfo>();
  const fetchedArtWork = useArtWorkApiAxios({ id: Number(id) });

  const { imgSrc } = useImageFallback(artWork?.imageUrl ?? '', fallBackSrc);
  const loadingImg = useSkeleton(imgSrc);

  useEffect(() => {
    if (fetchedArtWork) {
      setArtWork(fetchedArtWork);
    }
  }, [fetchedArtWork]);

  if (!id || !artWork) {
    return 'Not found';
  }

  const {
    title,
    artist_title,
    date_start,
    date_end,
    artist_display,
    dimensions,
    credit_line,
    place_of_origin,
    is_public_domain,
  } = artWork;

  const handleFavClick = () => {
    handleFavoritesChange(artWork);
  };
  const handleImageClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <div className="fav-cart">
      <div className="div-skeleton">
        {loadingImg ? (
          <CustomSkeleton className="custom-skeleton custom-skeleton-detailInfo" />
        ) : (
          <div
            className="image-cart"
            style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className="stop-propagation" onClick={handleImageClick}>
              <button
                className="info-fav-button info-fav-button-detail-info"
                onClick={handleFavClick}>
                <FavoritesIcon isSelected={isSelected} />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="info-cart">
        <div className="info-title">
          <div className="title-detailInfo">{title}</div>
          <div className="author-detailInfo">{artist_title}</div>
          <div className="years-detailInfo">
            {date_start}-{date_end}
          </div>
          <div className="overview-div">
            <div className="overview">Overview</div>
            <div className="text-info">
              <div>
                <span>Artist nationality:</span>
                {artist_display}
              </div>
              <div>
                <span>Dimensions: Sheet:</span>
                {dimensions}
              </div>
              <div>
                <span>Credit Line:</span>
                {credit_line}
              </div>
              <div>
                <span>Repository:</span>
                {place_of_origin}
              </div>
              <div>{is_public_domain ? 'Public' : 'Unpublish'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
