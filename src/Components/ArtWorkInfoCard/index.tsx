import { FC } from "react";
import { useNavigate } from "react-router-dom";
import info_fav_icon from "../../assets/logos/info_fav_icon.svg";
import { DETAIL_INFO } from "../../routes";
import './style.scss';


interface ArtWorkInfoCardProps {
    artWork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;

    }
}



export const ArtWorkInfoCard: FC<ArtWorkInfoCardProps> = ({ artWork }) => {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`${DETAIL_INFO}/${artWork.id}`);
    }

    console.log(artWork, 'artWork1')

    return (
        // <ArtWorkCard artWork={artWork}/> //Добавить реализацию компонента
        // <button onClick={handleClick}>
        <div className='special-gallery-card' style={{ backgroundImage: `url(${artWork.imageUrl})` }} onClick={handleCardClick}>
            <div className="info">
                <div className="info-text">
                    <div className="title">{artWork.title}</div>
                    <div className="author">{artWork.artist_title}</div>
                    <div className="public-domain">{artWork.is_public_domain ? 'Public' : 'Unpublish'}</div>
                </div>
                <button className="info-fav-button">
                    <img src={info_fav_icon} alt=""></img>
                </button>
            </div>
        </div>
        // </button>
    )
}