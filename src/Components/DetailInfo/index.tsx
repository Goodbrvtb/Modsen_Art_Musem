import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

import { useArtWorkApiAxios } from '../../utils/hooks/useGetDetailInfo';

interface DetailCartProps {

    isSelected: boolean,
    handleFavoritesChange: (artwork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
    }) => void,
    favoritesIds: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
    }[]
}


export const DetailCart: FC<DetailCartProps> = ({ favoritesIds, isSelected, handleFavoritesChange }) => {
    const { id } = useParams()
    const [artwork, setArtwork] = useState<any>(null)
    const { info } = useArtWorkApiAxios({ id: Number(id) })

    useEffect(() => {
        if (info?.data && info?.imgUrl) {
            setArtwork({ ...info?.data ?? null, imgUrl: info.imgUrl })
        }
    }, [info])
    if (!id) {
        return 'Not found'
    }

    if (!artwork) {
        return 'Not found'
    }
    const handleFavClick = () => {
        handleFavoritesChange(artwork)
    }

    console.log(favoritesIds, "favoritesIds")
    console.log(isSelected, "isSelected")

    return (
        <div className='fav-cart'>
            <div className="image-cart" style={{ backgroundImage: `url(${artwork.imgUrl})` }} >
                <div onClick={(e) => {
                    e.stopPropagation()
                }}>

                    <button className="info-fav-button info-fav-button-detail-info" onClick={handleFavClick}>
                        <svg className="fav-icon" fill={isSelected ? "#F17900" : "none"} width="74" height="74" viewBox="0 0 74 74" xmlns="http://www.w3.org/2000/svg">
                            <path d="M53.2573 57.9032L36.9993 48.4409L20.7412 57.9032V20.0538C20.7412 18.799 21.2306 17.5956 22.1017 16.7083C22.9729 15.821 24.1544 15.3226 25.3864 15.3226H48.6122C49.8442 15.3226 51.0257 15.821 51.8968 16.7083C52.7679 17.5956 53.2573 18.799 53.2573 20.0538V57.9032Z" stroke="#F17900" stroke-width="4.69765" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
            <div className="info-cart">
                <div className='info-title'>
                    <div className="title-detailInfo">{artwork.title}</div>
                    <div className="author-detailInfo">{artwork.artist_title}</div>
                    <div className="years-detailInfo">{artwork.date_start}-{artwork.date_end}</div>

                    <div className='overview-div'>
                        <div className='overview'>Overview</div>
                        <div className='text-info'>
                            <div><span>Artist nacionality:</span></div>
                            <div><span>Dimensions: Sheet:</span>{artwork.dimensions}</div>
                            <div><span>Credit Line:</span>{artwork.credit_line}</div>
                            <div><span>Repository:</span>{artwork.place_of_origin}</div>
                            <div>{artwork.is_public_domain ? 'Public' : 'Unpublish'}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>







    );
};
