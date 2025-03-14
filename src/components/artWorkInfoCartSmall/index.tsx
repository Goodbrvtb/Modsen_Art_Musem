import { DETAIL_INFO } from '@/routes';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import DefaultImage from '@assets/images/image-default.svg';
import { useImageFallback } from '@utils/hooks/useImageFallback';
import { useSkeleton } from '@utils/hooks/useSkeleton';

import { FavoritesIcon } from '@/components/favoritesIcon';

import { ArtWorkFullInfo } from '@/utils/types';

import { CustomSkeleton } from '../skeleton';
import './style.scss';

interface ArtWorkInfoCardOtherProps {
  artWork: ArtWorkFullInfo;
  isSelected: boolean;
  handleFavoritesChange: (artwork: ArtWorkFullInfo) => void;
}

export const ArtWorkInfoCardOther: FC<ArtWorkInfoCardOtherProps> = ({
  artWork,
  isSelected,
  handleFavoritesChange,
}) => {
  const navigate = useNavigate();
  const { imgSrc } = useImageFallback(artWork.imageUrl, DefaultImage);
  const loadingImg = useSkeleton(artWork.imageUrl);

  const handleCardClick = () => {
    navigate(`${DETAIL_INFO}/${artWork.id}`);
  };
  const handleFavClick = () => {
    handleFavoritesChange(artWork);
  };
  const handleClickStopPropagation = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="other-gallery-card" onClick={handleCardClick}>
      {loadingImg ? (
        <CustomSkeleton className="custom-skeleton custom-skeleton-infoCartSmall" />
      ) : (
        <img className="other-image" title="other-image" src={imgSrc} />
      )}

      <div className="info-other">
        <div className="info-text-other">
          <div className="title-other">{artWork.title}</div>
          <div className="author-other">{artWork.artist_display}</div>
          <div className="public-domain-other">
            {artWork.is_public_domain ? 'Public' : 'Unpublish'}
          </div>
        </div>
      </div>
      <div onClick={handleClickStopPropagation}>
        <button className="info-fav-button" onClick={handleFavClick}>
          <FavoritesIcon isSelected={isSelected} />
        </button>
      </div>
    </div>
  );
};
