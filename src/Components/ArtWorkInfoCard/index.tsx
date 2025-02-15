import { FC, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import fallBackSrc from '@assets/images/image-default.svg';
import { FavoritesIcon } from '@components/FavoritesIcon';
import { CustomSkeleton } from '@components/Skeleton/index';
import { useImageFallback } from '@utils/hooks/useImageFallback';
import { useSkeleton } from '@utils/hooks/useSkeleton';

import { DETAIL_INFO } from '../../routes';
import './style.scss';

interface ArtWorkInfoCardProps {
  artWork: {
    id: number;
    title: string;
    imageUrl: string;
    artist_display: string;
    is_public_domain: boolean;
    artist_title: string;
  };
  isSelected: boolean;
  handleFavoritesChange: (artwork: {
    id: number;
    title: string;
    imageUrl: string;
    artist_display: string;
    is_public_domain: boolean;
    artist_title: string;
  }) => void | ReactNode;
  className?: string;
}

export const ArtWorkInfoCard: FC<ArtWorkInfoCardProps> = ({
  className,
  artWork,
  isSelected,
  handleFavoritesChange,
}) => {
  const { imgSrc } = useImageFallback(artWork.imageUrl, fallBackSrc);
  const loadingImg = useSkeleton(artWork.imageUrl);
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`${DETAIL_INFO}/${artWork.id}`);
  };

  const handleFavClick = () => {
    handleFavoritesChange(artWork);
    console.log(artWork.id, 'artWorkID');
  };

  console.log(imgSrc, 'imgSrc');
  console.log(loadingImg, 'loading');

  return (
    <div>
      {loadingImg ? (
        <CustomSkeleton className="custom-skeleton" />
      ) : (
        <div>
          <div
            className="special-gallery-card"
            style={{ backgroundImage: `url(${imgSrc})` }}
            onClick={handleCardClick}>
            <div className="info">
              <div className="info-text">
                <div className="title">{artWork.title}</div>
                <div className="author">{artWork.artist_title}</div>
                <div className="public-domain">
                  {artWork.is_public_domain ? 'Public' : 'Unpublish'}
                </div>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}>
                <button
                  title="button"
                  className={className ? className : 'info-fav-button'}
                  onClick={handleFavClick}>
                  <FavoritesIcon isSelected={isSelected} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
