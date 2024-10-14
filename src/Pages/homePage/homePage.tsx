import {Header} from '../../Components/Header'
import {Footer} from '../../Components/Footer'
import {HomeTitle} from '../../Components/HomeTitle'
import {SearchBar} from '../../Components/SearchBar';
import {BodyTitele} from '../../Components/BodyTitele';
import {SpecialGallery} from '../../Components/SpecialGallery';

export function HomePage() {
    return (
        <div className="wrapper">
  <div className='content'>
  <Header/>
  {/* <HomeTitle/> */}
  <SearchBar/>
  <BodyTitele/>
  <SpecialGallery/>
  <Footer/>
 </div>
 </div>
    )}