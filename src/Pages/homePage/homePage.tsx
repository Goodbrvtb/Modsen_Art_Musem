import { BodyTitleOther } from '../../Components/BodyTitleOther/index';
import { Footer } from '../../Components/Footer/index';
import { Header } from '../../Components/Header/index';
import { OtherGallery } from '../../Components/OtherGallery/index';
import { SearchBar } from '../../Components/SearchBar/index';
// import { SpecialGallery } from '../../Components/specialGallery';
import { Title } from '../../Components/Title/index';


export function HomePage() {
    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Let's Find Some <span>Art</span> <br />Here!</>} />
                <SearchBar />
                {/* <SpecialGallery /> */}
                <BodyTitleOther />
                <OtherGallery artWorks={[0,1,2,3,4,5,6,7,8]} />
                <Footer />
            </div>
        </div>
    )
}