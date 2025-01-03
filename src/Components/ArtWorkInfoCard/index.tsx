import { FC } from "react";
// import { useNavigate } from "react-router-dom";
import info_fav_icon from "../../assets/logos/info_fav_icon.svg";
import favoritesIconFilled from "../../assets/logos/favoritesIconFilled.svg";
// import { DETAIL_INFO } from "../../routes";
import './style.scss';


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
    handleFavoritesChange: (id: number) => void

}



export const ArtWorkInfoCard: FC<ArtWorkInfoCardProps> = ({ artWork, isSelected, handleFavoritesChange }) => {
    // const navigate = useNavigate()
    // const handleCardClick = () => {
    //     navigate(`${DETAIL_INFO}/${artWork.id}`);
    // }

    const handleFavClick = () => {
        handleFavoritesChange(artWork.id)
        console.log(artWork.id, "artWorkID")
    }
    console.log(artWork, "artWork")
    console.log(isSelected, "isSelected")
    return (
        // <ArtWorkCard artWork={artWork}/> //Добавить реализацию компонента
        // <button onClick={handleClick}>
        <div className='special-gallery-card' style={{ backgroundImage: `url(${artWork.imageUrl})` }} >
            <div className="info">
                <div className="info-text">
                    <div className="title">{artWork.title}</div>
                    <div className="author">{artWork.artist_title}</div>
                    <div className="public-domain">{artWork.is_public_domain ? 'Public' : 'Unpublish'}</div>
                </div>
                <button className="info-fav-button" onClick={handleFavClick}>
                    {isSelected ? <img src={favoritesIconFilled} alt='' /> : <img src={info_fav_icon} alt='' />}
                </button>
            </div>
        </div>
        // </button>
    )
}