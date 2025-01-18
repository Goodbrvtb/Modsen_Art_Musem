import { FC, ReactNode } from "react";
import './style.scss';
import { DETAIL_INFO } from "../../routes";
import { useNavigate } from "react-router-dom";
import { FavoritesIcon } from "../FavoritesIcon";
import { useImageFallback } from "../../utils/hooks/useImageFallback";
import FALL_BACK_SRC from "../../assets/logos/imageDefault.svg"

interface ArtWorkInfoCardProps {
    artWork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;

    },
    isSelected: boolean,
    handleFavoritesChange: (artwork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
    }) => void
        | ReactNode, className?: string;

}



export const ArtWorkInfoCard: FC<ArtWorkInfoCardProps> = ({ className, artWork, isSelected, handleFavoritesChange }) => {

    const { imgSrc, handleError } = useImageFallback(artWork.imageUrl, FALL_BACK_SRC);
    console.log(FALL_BACK_SRC, 'handleError')



    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`${DETAIL_INFO}/${artWork.id}`);
    }

    const handleFavClick = () => {
        handleFavoritesChange(artWork)
        console.log(artWork.id, "artWorkID")
    }
    console.log(artWork, "artWork")
    console.log(isSelected, "isSelected")

    return (
        <div className='special-gallery-card' onError={handleError} style={{ backgroundImage: `url(${artWork.imageUrl})` }} onClick={handleCardClick} >
            <div className="info">
                <div className="info-text">
                    <div className="title">{artWork.title}</div>
                    <div className="author">{artWork.artist_title}</div>
                    <div className="public-domain">{artWork.is_public_domain ? 'Public' : 'Unpublish'}</div>
                </div>
                <div onClick={(e) => {
                    e.stopPropagation()
                }}
                >
                    <button title="button" className={className ? className : "info-fav-button"} onClick={handleFavClick}>
                        <FavoritesIcon isSelected={isSelected} />
                    </button>
                </div>
            </div>
        </div>

    )
}