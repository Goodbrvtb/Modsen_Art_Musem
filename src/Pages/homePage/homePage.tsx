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

export function HomePage() {

    const [searchValue, setSearchValue] = useState('')
    const { currentPage, handleCurrentPageChange } = useHandlePagination()
    console.log(currentPage, 'currentPage')
    const { artWorksList, totalPages } = useArtWorksApiAxios({ searchValue, selectedPage: currentPage })
    const { otherArtWorks } = useGetOtherArtWorks()



    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Let's Find Some <span>Art</span> <br />Here!</>} />
                <SearchBar setSearchValue={setSearchValue} />
                <SpecialGallery artWorks={artWorksList} />
                <Pagination currentPage={currentPage} lastPage={totalPages} totalPages={totalPages} setCurrentPage={handleCurrentPageChange} />
                <BodyTitleOther />
                <OtherGallery otherArtWorks={otherArtWorks} />
                <Footer />
            </div>
        </div>
    )
}