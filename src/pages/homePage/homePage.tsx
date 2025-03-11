import { useState } from 'react';

import { useArtWorksApiAxios } from '@utils/hooks/useAxiosArtWorks';
import { useGetOtherArtWorks } from '@utils/hooks/useGetOtherArtWorks';
import { useHandlePagination } from '@utils/hooks/useHandlePagination';

import { BodyTitleOther } from '@/components/bodyTitleOther';
import { Footer } from '@/components/footer/index';
import { Header } from '@/components/header';
import { OtherGallery } from '@/components/otherGallery/index';
import { Pagination } from '@/components/pagination';
import { SearchBar } from '@/components/searchBar/index';
import { SortComponent } from '@/components/sortComponent';
import { SpecialGallery } from '@/components/specialGallery';
import { Title } from '@/components/title/index';

import { useHandleFavIdChange } from '../../utils/hooks/useHandleFavIdChange';
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
