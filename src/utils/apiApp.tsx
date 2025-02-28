import {
  ARTWORKS_BY_ID_ENDPOINT,
  ARTWORKS_ENDPOINT,
  DEFAULT_OTHER_LIMIT,
  DEFAULT_SEARCH_LIMIT,
  FIELDS_OPTIONS,
  SEARCH_ENDPOINT,
} from '@/constants/api';

import axios from 'axios';

import { ArtWork, SearchArtWorkType } from '@/utils/types';

export const searchArtWorksApiAxios = async (
  inputData: string,
  currentPage: number,
): Promise<SearchArtWorkType> => {
  const { data } = await axios
    .get(SEARCH_ENDPOINT(inputData), {
      params: {
        limit: DEFAULT_SEARCH_LIMIT,
        page: currentPage,
      },
    })
    .then(function (data) {
      return data;
    });

  return { data: data.data, pagination: data.pagination };
};

export const getArtWorksByIdApiAxios = async (
  artWorkId: number,
): Promise<ArtWork> => {
  const { data } = await axios
    .get(ARTWORKS_BY_ID_ENDPOINT(artWorkId), {
      params: {
        fields: FIELDS_OPTIONS,
      },
    })
    .then(function (data) {
      return data.data;
    });

  return data;
};

export const getOtherArtWorksApiAxios =
  async (): Promise<SearchArtWorkType> => {
    const { data } = await axios
      .get(ARTWORKS_ENDPOINT, {
        params: {
          limit: DEFAULT_OTHER_LIMIT,
        },
      })
      .then(function (data) {
        return data;
      });

    return { data: data.data, pagination: data.pagination };
  };
