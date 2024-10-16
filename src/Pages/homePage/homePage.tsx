import {Header} from '../../Components/header'
import {Footer} from '../../Components/footer'
import {HomeTitle} from '../../Components/homeTitle'
import {SearchBar} from '../../Components/searchBar';
import {BodyTitele} from '../../Components/bodyTitele';
import {SpecialGallery} from '../../Components/specialGallery';
import {BodyTiteleOther} from '../../Components/bodyTiteleOther';

export function HomePage() {
    return (
        <div className="wrapper">
  <div className='content'>
  <Header/>
  <HomeTitle/>  
  <SearchBar/>
  <BodyTitele/>
  <SpecialGallery/>
  <BodyTiteleOther/>
  <Footer/>
 </div>
 </div>
    )}