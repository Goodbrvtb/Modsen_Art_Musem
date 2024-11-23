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

export function HomePage() {

    const [searchValue, setSearchValue] = useState('')
    const { artWorksList } = useArtWorksApiAxios({ searchValue })
    const { otherArtWorks } = useGetOtherArtWorks()

    return (
        <div className="wrapper">
            <div className='content'>
                <Header />
                <Title title={<>Let's Find Some <span>Art</span> <br />Here!</>} />
                <SearchBar setSearchValue={setSearchValue} />
                <SpecialGallery artWorks={artWorksList} />
                <BodyTitleOther />
                <OtherGallery otherArtWorks={otherArtWorks} />
                <Footer />
            </div>
        </div>
    )
}