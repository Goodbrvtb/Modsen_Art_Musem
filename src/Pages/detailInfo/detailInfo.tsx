
import { useParams } from 'react-router-dom';
import { DetailCart } from '../../Components/DetailInfo'
import { Footer } from '../../Components/Footer/index'
import { Header } from '../../Components/Header'
import { useHandleFavIdChange } from '../../utils/hooks/usehandleFavIdChange';

export function DetailInfo() {
    const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange()
    const { id } = useParams()
    return (

        <div>
            <Header />
            <DetailCart favoritesIds={favoritesIds} handleFavoritesChange={handleFavoritesChange}
                isSelected={favoritesIds.some(item => item.id === Number(id))} />
            <Footer />
        </div>

    )
}