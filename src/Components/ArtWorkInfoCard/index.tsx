import { FC, ReactNode } from "react";
import './style.scss';
import { DETAIL_INFO } from "../../routes";
import { useNavigate } from "react-router-dom";

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
        | ReactNode, className?: string
}



export const ArtWorkInfoCard: FC<ArtWorkInfoCardProps> = ({ className, artWork, isSelected, handleFavoritesChange }) => {
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
        <div className='special-gallery-card' style={{ backgroundImage: `url(${artWork.imageUrl})` }} onClick={handleCardClick} >
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
                    <button alt="Filled bookmark icon " className={className ? className : "info-fav-button"} onClick={handleFavClick}>
                        <svg className="fav-icon" fill={isSelected ? "#F17900" : "none"} width="74" height="74" viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.2573 57.9032L36.9993 48.4409L20.7412 57.9032V20.0538C20.7412 18.799 21.2306 17.5956 22.1017 16.7083C22.9729 15.821 24.1544 15.3226 25.3864 15.3226H48.6122C49.8442 15.3226 51.0257 15.821 51.8968 16.7083C52.7679 17.5956 53.2573 18.799 53.2573 20.0538V57.9032Z" stroke="#F17900" stroke-width="4.69765" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>

    )
}