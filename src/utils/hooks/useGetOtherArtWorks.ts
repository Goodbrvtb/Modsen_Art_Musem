import { IMAGE_ENDPOINT } from '@/constants/api';

import { useEffect, useState } from 'react';

import { getArtWorksByIdApiAxios, getOtherArtWorksApiAxios } from '../apiApp';
import { ArtWorkFullInfo } from '../types';

export const useGetOtherArtWorks = () => {
  const [data, setData] = useState<ArtWorkFullInfo[]>([]);

  useEffect(() => {
    async function getArtWorks() {
      const artWorks = await getOtherArtWorksApiAxios();
      const artWorkFullInfo = await Promise.all(
        artWorks.data.map(async ({ id }) => {
          const artWork = await getArtWorksByIdApiAxios(id);

          return {
            ...artWork,
            imageUrl: IMAGE_ENDPOINT(artWork.image_id),
          };
        }),
      );
      setData(artWorkFullInfo);
    }

    void getArtWorks();
  }, []);

  return { otherArtWorks: data };
};
