import { useState } from 'react';
import { BodyTitleOther } from '../../Components/BodyTitleOther/index';
import { Footer } from '../../Components/Footer/index';
import { Header } from '../../Components/Header/index';
import { OtherGallery } from '../../Components/OtherGallery/index';
import { SearchBar } from '../../Components/SearchBar/index';
import { Title } from '../../Components/Title/index';
import { useArtWorksApiAxios } from '../../utils/hooks/useAxiosArtWorks';
import { SpecialGallery } from '../../Components/SpecialGallery';
import { useGetOtherArtWorks } from '../../utils/hooks/useGetOtherArtWorks';
import './style.scss';
import { Pagination } from '../../Components/Pagination';
import { useHandlePagination } from '../../utils/hooks/useHandlePagination';
import { useHandleFavIdChange } from '../../utils/hooks/usehandleFavIdChange';
import { SortComponent } from '../../Components/SortComponent';

export function HomePage() {

    const [searchValue, setSearchValue] = useState('')
    const { currentPage, handleCurrentPageChange } = useHandlePagination()
    const { artWorksList, totalPages, setData } = useArtWorksApiAxios({ searchValue, selectedPage: currentPage })
    const { otherArtWorks } = useGetOtherArtWorks()
    const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange()



    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Let's Find Some <span>Art</span> <br />Here!</>} />
                <SearchBar setSearchValue={setSearchValue} />
                <SpecialGallery artWorks={artWorksList} favoritesIds={favoritesIds} handleFavoritesChange={handleFavoritesChange} />
                <Pagination currentPage={currentPage} lastPage={totalPages} setCurrentPage={handleCurrentPageChange} />
                <SortComponent data={artWorksList} setData={setData} />
                <BodyTitleOther />
                <OtherGallery otherArtWorks={otherArtWorks} favoritesIds={favoritesIds} handleFavoritesChange={handleFavoritesChange} />
                <Footer />
            </div>
        </div>
    )
}