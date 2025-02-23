import { useEffect, useState } from 'react';

import { IMAGE_ENDPOINT } from '../../constants/api';
import { getArtWorksByIdApiAxios, getOtherArtWorksApiAxios } from '../apiApp';

//указать тип возвращаемого значения функции
//убрать any указать нормальный тип
export const useGetOtherArtWorks = () => {
  const [data, setData] = useState<any>([]);

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
