import { IMAGE_ENDPOINT } from '@/constants/api';

import { useEffect, useState } from 'react';

import { getArtWorksByIdApiAxios } from '../apiApp';
import { ArtWorkFullInfo, UseArtWorkApiAxiosProps } from '../types';

export const useArtWorkApiAxios = ({
  id,
}: UseArtWorkApiAxiosProps): ArtWorkFullInfo | undefined => {
  const [info, setInfo] = useState<ArtWorkFullInfo>();

  useEffect(() => {
    async function getInfo(id: number) {
      const artWork = await getArtWorksByIdApiAxios(id);

      const fullInfo = {
        ...artWork,
        imageUrl: IMAGE_ENDPOINT(artWork.image_id),
      };

      setInfo(fullInfo);
    }

    void getInfo(id);
  }, [id]);
  return info;
};
