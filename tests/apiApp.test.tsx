import axios from 'axios';

import {
  getArtWorksByIdApiAxios,
  getOtherArtWorksApiAxios,
  searchArtWorksApiAxios,
} from '../src/utils/apiApp';
import { ArtWork, SearchArtWorkType } from '../src/utils/types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ArtWorks API', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch artworks based on search input', async () => {
    const inputData = 'starry night';
    const currentPage = 1;
    const mockResponse: SearchArtWorkType = {
      data: [
        {
          id: 1,
          title: 'Starry Night',
          artist_display: 'Vincent van Gogh',
          artist_title: 'Dutch Post-Impressionist',
          credit_line: 'Museum of Modern Art',
          date_end: 1889,
          date_start: 1888,
          dimensions: '73.7 cm × 92.1 cm',
          gallery_title: 'Museum of Modern Art',
          image_id: '1',
          is_on_view: true,
          is_public_domain: true,
          place_of_origin: 'Netherlands',
        },
      ],
      pagination: {
        current_page: 1,
        total_pages: 1,
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { data: mockResponse.data, pagination: mockResponse.pagination },
    });

    const result = await searchArtWorksApiAxios(inputData, currentPage);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.artic.edu/api/v1/artworks/search?q=${inputData}&query[term][is_public_domain]=true`,
      {
        params: {
          limit: 3,
          page: currentPage,
        },
      },
    );
    expect(result).toEqual(mockResponse);
  });

  it('should fetch artwork by ID', async () => {
    const artWorkId = 1;
    const mockArtWork: ArtWork = {
      id: 1,
      title: 'Starry Night',
      artist_display: 'Vincent van Gogh',
      artist_title: 'Dutch Post-Impressionist',
      credit_line: 'Museum of Modern Art',
      date_end: 1889,
      date_start: 1888,
      dimensions: '73.7 cm × 92.1 cm',
      gallery_title: 'Museum of Modern Art',
      image_id: '1',
      is_on_view: true,
      is_public_domain: true,
      place_of_origin: 'Netherlands',
    };

    mockedAxios.get.mockResolvedValueOnce({ data: { data: mockArtWork } });

    const result = await getArtWorksByIdApiAxios(artWorkId);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.artic.edu/api/v1/artworks/${artWorkId}?`,
      {
        params: {
          fields:
            'image_id,id,title,artist_display,artist_title,is_public_domain,place_of_origin,dimensions,credit_line,is_on_view,gallery_title,date_start,date_end',
        },
      },
    );
    expect(result).toEqual(mockArtWork);
  });

  it('should fetch other artworks', async () => {
    const mockResponse: SearchArtWorkType = {
      data: [
        {
          id: 2,
          title: 'Mona Lisa',
          artist_display: 'Leonardo da Vinci',
          artist_title: 'Renaissance Artist',
          credit_line: 'Louvre Museum',
          date_end: 1506,
          date_start: 1503,
          dimensions: '77 cm × 53 cm',
          gallery_title: 'Louvre Museum',
          image_id: '2',
          is_on_view: true,
          is_public_domain: true,
          place_of_origin: 'Italy',
        },
      ],
      pagination: {
        current_page: 1,
        total_pages: 1,
      },
    };

    mockedAxios.get.mockResolvedValueOnce({
      data: { data: mockResponse.data, pagination: mockResponse.pagination },
    });

    const result = await getOtherArtWorksApiAxios();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `https://api.artic.edu/api/v1/artworks`,
      {
        params: {
          limit: 9,
        },
      },
    );
    expect(result).toEqual(mockResponse);
  });
});
