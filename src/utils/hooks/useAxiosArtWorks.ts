import { IMAGE_ENDPOINT } from '@/constants/api';

import { useEffect, useState } from 'react';

import { getArtWorksByIdApiAxios, searchArtWorksApiAxios } from '../apiApp';
import { ArtWorkFullInfo, UseArtWorksApiAxiosProps } from '../types';

export const useArtWorksApiAxios = ({
  searchValue,
  selectedPage,
}: UseArtWorksApiAxiosProps) => {
  const [fetchedArtworks, setFetchedArtworks] = useState<ArtWorkFullInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function getArtWorks() {
      try {
        const { data, pagination } = await searchArtWorksApiAxios(
          searchValue,
          selectedPage,
        );
        const artWorkFullInfo = await Promise.all(
          data.map(async ({ id }) => {
            const artWork = await getArtWorksByIdApiAxios(id);
            return {
              ...artWork,
              imageUrl: IMAGE_ENDPOINT(artWork.image_id),
            };
          }),
        );

        setFetchedArtworks(artWorkFullInfo);
        setCurrentPage(pagination.current_page);
        setTotalPages(pagination.total_pages);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    void getArtWorks();
  }, [searchValue, selectedPage]);

  return {
    artWorksList: fetchedArtworks,
    totalPages,
    currentPage,
    setData: setFetchedArtworks,
  };
};
