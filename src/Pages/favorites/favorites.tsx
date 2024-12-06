
import { Footer } from '../../Components/Footer/index'
import { Header } from '../../Components/Header'
import { Title } from '../../Components/Title'

export function FavoritesPage() {
    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Here are your <br /><span>Favorites!</span></>} />
                <Footer />
            </div>
        </div>
    )
}
