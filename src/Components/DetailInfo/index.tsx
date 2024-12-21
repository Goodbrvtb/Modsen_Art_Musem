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

    console.log(info, "work11")

    // const nacionality: string = info.data.artist_display.split(' ')

    return (
        <div className='fav-cart'>
            <div className="image-cart" style={{ backgroundImage: `url(${info.imgUrl})` }} ></div>
            <div className="info-cart">
                <div className='info-title'>
                    <div className="title-detailInfo">{info.data.title}</div>
                    <div className="author-detailInfo">{info.data.artist_title}</div>
                    <div className="years-detailInfo">{info.data.date_start}-{info.data.date_end}</div>

                    <div className='overview-div'>
                        <div className='overview'>Overview</div>
                        <div className='text-info'>
                            <div><span>Artist nacionality:</span></div>
                            <div><span>Dimensions: Sheet:</span>{info.data.dimensions}</div>
                            <div><span>Credit Line:</span>{info.data.credit_line}</div>
                            <div><span>Repository:</span>{info.data.place_of_origin}</div>
                            <div>{info.data.is_public_domain ? 'Public' : 'Unpublish'}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>







    );
};
