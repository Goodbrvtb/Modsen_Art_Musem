import { FC } from 'react';
import { useParams } from 'react-router-dom';
import './style.scss';
import { getArtWorksByIdApiAxios } from '../../utils/apiApp';
import { useArtWorkApiAxios } from '../../utils/hooks/useGetDetailInfo';



export const DetailCart: FC = () => {
    const { id } = useParams()
    if (!id) {
        return 'Not found'

    }
    const { info } = useArtWorkApiAxios({ id: Number(id) })
    if (!info) {
        return 'Not found'
    }

    console.log(info.imgUrl, "work11")

    return (
        <div className='fav-cart'>
            <div className="image-cart" style={{ backgroundImage: `url(${info.imgUrl})` }} ></div>
            <div className="info-cart">
                <div className='info-title'>
                    <div className="title">{info.data.title}</div>
                    <div className="author">artWork.artist_display</div>
                    <div className='overview'>
                        <div>Artist nacionality:</div>
                        <div>Dimensions: Sheet:</div>
                        <div>Credit Line:</div>
                        <div>Repository:</div>
                        <div>Public:</div>
                    </div>
                </div>

            </div>
        </div>







    );
};
