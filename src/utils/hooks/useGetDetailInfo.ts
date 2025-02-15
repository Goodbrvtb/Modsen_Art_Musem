import { useEffect, useState } from 'react';

import { IMAGE_ENDPOINT } from '../../constants/api';
import { getArtWorksByIdApiAxios } from '../apiApp';
import { UseArtWorkApiAxiosProps } from '../types';

export const useArtWorkApiAxios = ({ id }: UseArtWorkApiAxiosProps) => {
  const [info, setInfo] = useState<any>();
  useEffect(() => {
    async function getInfo(id: number) {
      const info = await getArtWorksByIdApiAxios(id);
      const fullInfo = {
        ...info,
        imageUrl: IMAGE_ENDPOINT(info.data.image_id),
      };

      setInfo(fullInfo);
    }
    void getInfo(id);
  }, [id]);

  return { info };
};
