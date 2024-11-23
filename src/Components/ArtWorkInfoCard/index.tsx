import { useNavigate, useParams } from "react-router-dom";
import { DETAIL_INFO } from "../../routes";
import { FC } from "react";
import info_fav_icon from "../../assets/logos/info_fav_icon.svg"


interface ArtWorkInfoCardProps {
    artWork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;

    }
}



export const ArtWorkInfoCard: FC<ArtWorkInfoCardProps> = ({ artWork }) => {
    const navigate = useNavigate()






    const handleCardClick = () => {
        navigate(`${DETAIL_INFO}/${artWork.id}`);
    }

    const params = useParams()
    console.log(params, 'useParams')

    return (
        // <ArtWorkCard artWork={artWork}/> //Добавить реализацию компонента
        // <button onClick={handleClick}>
        <div className='special-gallery-card' style={{ backgroundImage: `url(${artWork.imageUrl})` }} onClick={handleCardClick}>
            <div className="info">
                <div className="title">{artWork.title}</div>
                <div className="author">{artWork.artist_display}</div>
                <div className="public-domain">public<div />
                </div >
                <div className="info-fav-icon">
                    <img src={info_fav_icon} alt=""></img>
                </div>
            </div>
        </div>
        // </button>
    )
}