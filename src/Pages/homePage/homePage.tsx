import { useState } from 'react';

import { BodyTitleOther } from '@components/BodyTitleOther/index.tsx';
import { Footer } from '@components/Footer/index';
import { Header } from '@components/Header';
import { OtherGallery } from '@components/OtherGallery/index';
import { Pagination } from '@components/Pagination';
import { SearchBar } from '@components/SearchBar/index';
import { SortComponent } from '@components/SortComponent';
import { SpecialGallery } from '@components/SpecialGallery';
import { Title } from '@components/Title/index';
import { useArtWorksApiAxios } from '@utils/hooks/useAxiosArtWorks';
import { useGetOtherArtWorks } from '@utils/hooks/useGetOtherArtWorks';
import { useHandlePagination } from '@utils/hooks/useHandlePagination';

import { useHandleFavIdChange } from '@/utils/hooks/useHandleFavIdChange';

import './style.scss';

export function HomePage() {
  const [searchValue, setSearchValue] = useState('');
  const { currentPage, handleCurrentPageChange } = useHandlePagination();
  const { artWorksList, totalPages, setData } = useArtWorksApiAxios({
    searchValue,
    selectedPage: currentPage,
  });
  const { otherArtWorks } = useGetOtherArtWorks();
  const { favoritesIds, handleFavoritesChange } = useHandleFavIdChange();

  console.log(artWorksList, 'tetst');

  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Title
          title={
            <>
              Let's Find Some <span>Art</span> <br />
              Here!
            </>
          }
        />
        <SearchBar setSearchValue={setSearchValue} />
        <SpecialGallery
          artWorks={artWorksList}
          favoritesIds={favoritesIds}
          handleFavoritesChange={handleFavoritesChange}
        />
        <Pagination
          currentPage={currentPage}
          lastPage={totalPages}
          setCurrentPage={handleCurrentPageChange}
        />
        <SortComponent data={artWorksList} setData={setData} />
        <BodyTitleOther />
        <OtherGallery
          otherArtWorks={otherArtWorks}
          favoritesIds={favoritesIds}
          handleFavoritesChange={handleFavoritesChange}
          isSelected={undefined}
        />
        <Footer />
      </div>
    </div>
  );
}
