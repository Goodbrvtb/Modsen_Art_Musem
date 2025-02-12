
import { Footer } from '@components/Footer/';
import { Header } from '@components/Header';
import { Title } from '@components/Title';



export function NotFound() {

    return (

        <div>
            <Header />
            <Title title={<>Page not found<br /><span>404</span></>} />
            <Footer />
        </div>

    )
}