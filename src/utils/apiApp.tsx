import axios from "axios";
import { ARTWORKS_BY_ID_ENDPOINT, ARTWORKS_ENDPOINT, SEARCH_ENDPOINT } from "../constants/api";

interface SearchArtWorkType {
  data: { id: number }[]

}

interface ArtWorkType {
  data: {
    image_id: string,
    id: number
  }

}

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
  const resultAxios = await axios.get(SEARCH_ENDPOINT(inputData))
    .then(function (data) {
      // обработка успешного запроса
      console.log(data, 'axios');
      return data
    })
  return resultAxios.data
}


// Описать тип возвращаемого значения 
// export const fetchArtWorkByIdApi = (artWorkId: number) => {
//   return fetch(ARTWORKS_BY_ID_ENDPOINT(artWorkId))
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data)
//       return data
//     })
// }
export const getArtWorksByIdApiAxios = async (artWorkId: number): Promise<ArtWorkType> => {
  // Делаем запрос пользователя с данным ID
  const resultAxios = await axios.get(ARTWORKS_BY_ID_ENDPOINT(artWorkId), {
    params: {
      fields: "image_id,id",
      limit: 3
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
