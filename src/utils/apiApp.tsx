import axios from "axios";
import { ARTWORKS_BY_ID_ENDPOINT, ARTWORKS_ENDPOINT, SEARCH_ENDPOINT } from "../constants/api";
import { ArtWorkType, SearchArtWorkType } from "../utils/types"



// Описать тип возвращаемого значения 
// Возвращать data.data чтобы не делать это выше!
// export const searchArtWorksApi = (inputData: string):SearchArtWorkType => {
//   return fetch(SEARCH_ENDPOINT(inputData))
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       return data
//     })
// }


export const searchArtWorksApiAxios = async (inputData: string): Promise<SearchArtWorkType> => {
  // Делаем запрос пользователя с данным ID
  const resultAxios = await axios.get(SEARCH_ENDPOINT(inputData), {
    params: {
      limit: 3
    }
  })
    .then(function (data) {
      // обработка успешного запроса
      console.log(data, 'axios');
      return data
    })
  return resultAxios.data
}


export const getArtWorksByIdApiAxios = async (artWorkId: number): Promise<ArtWorkType> => {
  // Делаем запрос пользователя с данным ID
  const resultAxios = await axios.get(ARTWORKS_BY_ID_ENDPOINT(artWorkId), {
    params: {
      fields: "image_id,id,title,artist_display,is_public_domain,place_of_origin,dimensions,credit_line,is_on_view,gallery_title,date_start,date_end",
    }

  })
    .then(function (data) {
      // обработка успешного запроса
      console.log(data, 'axiosget');
      return data
    })
  return resultAxios.data
}

export const getOtherArtWorksApiAxios = async (): Promise<SearchArtWorkType> => {
  // Делаем запрос пользователя с данным ID
  const resultAxios = await axios.get(ARTWORKS_ENDPOINT, {
    params: {
      limit: 9
    }
  })
    .then(function (data) {
      // обработка успешного запроса
      console.log(data, 'axiosOther');
      return data
    })
  return resultAxios.data
}
