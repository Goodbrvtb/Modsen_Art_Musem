import { useNavigate } from "react-router-dom";
import { DETAIL_INFO } from "../../routes";
import './style.scss';
import info_fav_icon from "../../assets/logos/info_fav_icon.svg";
import { FC } from "react";

interface ArtWorkInfoCardProps {
    artWork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;

    }
}



export const ArtWorkInfoCardOther: FC<ArtWorkInfoCardProps> = ({ artWork }) => {
    const navigate = useNavigate()
    const handleCardClick = () => {
        navigate(`${DETAIL_INFO}/${artWork.id}`);
    }

    console.log(artWork, 'artWork1')

    return (<div className='other-gallery-card' onClick={handleCardClick}>
        <img className='other-image' title='other-image' src={artWork.imageUrl} />
        <div className="info-other">
            <div className="info-text-other">
                <div className="title-other">{artWork.title}</div>
                <div className="author-other">{artWork.artist_display}</div>
                <div className="public-domain-other">{artWork.is_public_domain ? 'Public' : 'Unpublish'}</div>
            </div>

        </div>
        <button className="info-fav-button-other">
            <img src={info_fav_icon} alt=""></img>
        </button>
    </div>)
}