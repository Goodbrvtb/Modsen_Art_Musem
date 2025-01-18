import { useNavigate } from "react-router-dom";
import { DETAIL_INFO } from "../../routes";
import './style.scss';
import { FC } from "react";
import { FavoritesIcon } from "../FavoritesIcon";

interface ArtWorkInfoCardOtherProps {
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
}



export const ArtWorkInfoCardOther: FC<ArtWorkInfoCardOtherProps> = ({ artWork, isSelected, handleFavoritesChange }) => {
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
    return (<div className='other-gallery-card' onClick={handleCardClick}>
        <img className='other-image' title='other-image' src={artWork.imageUrl} />
        <div className="info-other">
            <div className="info-text-other">
                <div className="title-other">{artWork.title}</div>
                <div className="author-other">{artWork.artist_display}</div>
                <div className="public-domain-other">{artWork.is_public_domain ? 'Public' : 'Unpublish'}</div>
            </div>

        </div>
        <div onClick={(e) => {
            e.stopPropagation()
        }}
        >
            <button alt="Filled bookmark icon " className="info-fav-button" onClick={handleFavClick}>
                <FavoritesIcon isSelected={isSelected} />
            </button>
        </div>
    </div>)
}