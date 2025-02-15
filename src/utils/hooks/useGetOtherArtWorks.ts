import { useEffect, useState } from 'react';

import { IMAGE_ENDPOINT } from '../../constants/api';
import { getArtWorksByIdApiAxios, getOtherArtWorksApiAxios } from '../apiApp';

export const useGetOtherArtWorks = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    async function getArtWorks() {
      const artWorks = await getOtherArtWorksApiAxios();
      const artWorkFullInfo = await Promise.all(
        artWorks.data.map(async ({ id }) => {
          const { data } = await getArtWorksByIdApiAxios(id);

          return {
            ...data,
            imageUrl: IMAGE_ENDPOINT(data.image_id),
          };
        }),
      );
      setData(artWorkFullInfo);
    }

    void getArtWorks(); // зачем void?? вызов функции но без вывода значения
  }, []);

  return { otherArtWorks: data };
};
