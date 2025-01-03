
import { ArtWorkInfoCardOther } from '../../Components/ArtWorkInfoCartSmall'
import { Footer } from '../../Components/Footer/index'
import { Header } from '../../Components/Header'
import { SectionTitle } from '../../Components/SectionTitle';
import { Title } from '../../Components/Title'
import favoritesIcon from "../../assets/logos/favoritesIcon.svg";
import './style.scss';

export function FavoritesPage() {



    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Here Are Your <br /><span><img className="icon" src={favoritesIcon} alt="dots icon"></img>Favorites!</span></>} />
                <SectionTitle className='body-title body-title-favorite' title={<><span>Saved by you</span> <br />Your favorites list</>} />
                <div className="other-gallery">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((artWork) => <ArtWorkInfoCardOther artWork={artWork} />)}
                </div>
                <Footer />
            </div>
        </div>
    )
}
