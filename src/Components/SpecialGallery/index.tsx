import { FC } from 'react';
import { SectionTitle } from '../SectionTitle/index';
import info_fav_icon from '../../assets/logos/info_fav_icon.svg'
import './style.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { DETAIL_INFO } from '../../routes';
import { SpecialGalleryProps } from '../../utils/types';
import { ArtWorkInfoCard } from '../ArtWorkInfoCard';






export const SpecialGallery: FC<SpecialGalleryProps> = ({ artWorks }) => {



  const limitArtWorks = artWorks.slice(0, 3)

  return (
    <>
      <SectionTitle title={<><span>Topics for you</span> <br />Our special gallery!</>} />
      <div className="special-gallery">
        {limitArtWorks.map((artWork) => <ArtWorkInfoCard artWork={artWork} />)}
      </div>
    </>

  );
};
