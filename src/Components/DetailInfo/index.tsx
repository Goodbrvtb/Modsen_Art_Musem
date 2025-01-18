import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';

import { useArtWorkApiAxios } from '../../utils/hooks/useGetDetailInfo';
import { FavoritesIcon } from '../FavoritesIcon';

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
        if (info?.data && info?.imageUrl) {
            setArtwork({ ...info?.data ?? null, imageUrl: info.imageUrl })
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
            <div className="image-cart" style={{ backgroundImage: `url(${artwork.imageUrl})` }} >
                <div onClick={(e) => {
                    e.stopPropagation()
                }}>

                    <button className="info-fav-button info-fav-button-detail-info" onClick={handleFavClick}>
                        <FavoritesIcon isSelected={isSelected} />

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
                            <div><span>Artist nacionality:</span>{artwork.artist_display}</div>
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
