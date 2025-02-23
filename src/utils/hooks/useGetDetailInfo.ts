import { useEffect, useState } from 'react';

import { IMAGE_ENDPOINT } from '../../constants/api';
import { getArtWorksByIdApiAxios } from '../apiApp';
import { ArtWorkFullInfo, UseArtWorkApiAxiosProps } from '../types';

//указать тип возвращаемого значения функции
export const useArtWorkApiAxios = ({
  id,
}: UseArtWorkApiAxiosProps): ArtWorkFullInfo | undefined => {
  //убрать any указать нормальный тип
  const [info, setInfo] = useState<ArtWorkFullInfo>();

  useEffect(() => {
    async function getInfo(id: number) {
      const artWork = await getArtWorksByIdApiAxios(id);

      const fullInfo = {
        ...artWork,
        imageUrl: IMAGE_ENDPOINT(artWork.image_id),
      };

      setInfo(fullInfo);
      console.log(fullInfo);
    }

    void getInfo(id);
  }, [id]);
  console.log(info);
  return info;
};
