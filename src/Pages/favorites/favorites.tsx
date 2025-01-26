
import { ArtWorkInfoCardOther } from '../../Components/ArtWorkInfoCartSmall'
import { Footer } from '../../Components/Footer/index'
import { Header } from '../../Components/Header'
import { SectionTitle } from '../../Components/SectionTitle';
import { Title } from '../../Components/Title'
import favoritesIcon from "../../assets/logos/favoritesIcon.svg";
import { useHandleFavIdChange } from '../../utils/hooks/usehandleFavIdChange';
import './style.scss';

export function FavoritesPage() {
    const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange()
    const lengthFavoritesIds = favoritesIds.length



    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Here Are Your <br /><span><img className="icon" src={favoritesIcon} alt="dots icon"></img>Favorites!</span></>} />
                {lengthFavoritesIds ? (<SectionTitle className='body-title body-title-favorite' title={<><span>Saved by you</span> <br />Your favorites list</>} />) : (<></>)}
                <div className="other-gallery">
                    {!lengthFavoritesIds && (<Title title={<>There are no favorites in your gallery. To add to favorites, click the bookmark icon on the picture. </>} />)}
                    {favoritesIds.map((artWork) => <ArtWorkInfoCardOther artWork={artWork} handleFavoritesChange={handleFavoritesChange} isSelected={favoritesIds.some(item => item.id === artWork.id)} />)}
                </div>
                <Footer />
            </div>
        </div>
    )
}
