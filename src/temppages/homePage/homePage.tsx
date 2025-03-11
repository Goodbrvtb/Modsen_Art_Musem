import { BodyTitleOther } from '@/tempcomponents/bodyTitleOther';
import { Footer } from '@/tempcomponents/tempfooter/index';
import { Header } from '@/tempcomponents/tempheader';
import { OtherGallery } from '@/tempcomponents/tempotherGallery/index';
import { Pagination } from '@/tempcomponents/temppagination';
import { SearchBar } from '@/tempcomponents/tempsearchBar/index';
import { SortComponent } from '@/tempcomponents/tempsortComponent';
import { SpecialGallery } from '@/tempcomponents/tempspecialGallery';
import { Title } from '@/tempcomponents/title/index';

import { useState } from 'react';

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
