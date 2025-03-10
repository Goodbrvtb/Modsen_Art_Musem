import { sortDataByType } from '../src/utils/sortDataByType';
import { ArtWorkFullInfo } from '../src/utils/types';

describe('sortDataByType', () => {
  const artworks: ArtWorkFullInfo[] = [
    {
      id: 1,
      title: 'C',
      artist_display: 'Artist A',
      artist_title: 'Title A',
      credit_line: 'Credit A',
      date_end: 2023,
      date_start: 2020,
      dimensions: '10x10',
      gallery_title: 'Gallery A',
      image_id: '1',
      is_on_view: true,
      is_public_domain: true,
      place_of_origin: 'Origin A',
      imageUrl: '',
    },
    {
      id: 2,
      title: 'A',
      artist_display: 'Artist B',
      artist_title: 'Title B',
      credit_line: 'Credit B',
      date_end: 2021,
      date_start: 2019,
      dimensions: '20x20',
      gallery_title: 'Gallery B',
      image_id: '2',
      is_on_view: false,
      is_public_domain: true,
      place_of_origin: 'Origin B',
      imageUrl: '',
    },
    {
      id: 3,
      title: 'B',
      artist_display: 'Artist C',
      artist_title: 'Title C',
      credit_line: 'Credit C',
      date_end: 2022,
      date_start: 2020,
      dimensions: '15x15',
      gallery_title: 'Gallery C',
      image_id: '3',
      is_on_view: true,
      is_public_domain: false,
      place_of_origin: 'Origin C',
      imageUrl: '',
    },
  ];

  it('should sort artworks in ascending order by title', () => {
    const result = sortDataByType({ data: artworks, type: 'asc' });
    expect(result).toEqual([
      {
        id: 2,
        title: 'A',
        artist_display: 'Artist B',
        artist_title: 'Title B',
        credit_line: 'Credit B',
        date_end: 2021,
        date_start: 2019,
        dimensions: '20x20',
        gallery_title: 'Gallery B',
        image_id: '2',
        is_on_view: false,
        is_public_domain: true,
        place_of_origin: 'Origin B',
        imageUrl: '',
      },
      {
        id: 3,
        title: 'B',
        artist_display: 'Artist C',
        artist_title: 'Title C',
        credit_line: 'Credit C',
        date_end: 2022,
        date_start: 2020,
        dimensions: '15x15',
        gallery_title: 'Gallery C',
        image_id: '3',
        is_on_view: true,
        is_public_domain: false,
        place_of_origin: 'Origin C',
        imageUrl: '',
      },
      {
        id: 1,
        title: 'C',
        artist_display: 'Artist A',
        artist_title: 'Title A',
        credit_line: 'Credit A',
        date_end: 2023,
        date_start: 2020,
        dimensions: '10x10',
        gallery_title: 'Gallery A',
        image_id: '1',
        is_on_view: true,
        is_public_domain: true,
        place_of_origin: 'Origin A',
        imageUrl: '',
      },
    ]);
  });

  it('should sort artworks in descending order by title', () => {
    const result = sortDataByType({ data: artworks, type: 'desc' });
    expect(result).toEqual([
      {
        id: 1,
        title: 'C',
        artist_display: 'Artist A',
        artist_title: 'Title A',
        credit_line: 'Credit A',
        date_end: 2023,
        date_start: 2020,
        dimensions: '10x10',
        gallery_title: 'Gallery A',
        image_id: '1',
        is_on_view: true,
        is_public_domain: true,
        place_of_origin: 'Origin A',
        imageUrl: '',
      },
      {
        id: 3,
        title: 'B',
        artist_display: 'Artist C',
        artist_title: 'Title C',
        credit_line: 'Credit C',
        date_end: 2022,
        date_start: 2020,
        dimensions: '15x15',
        gallery_title: 'Gallery C',
        image_id: '3',
        is_on_view: true,
        is_public_domain: false,
        place_of_origin: 'Origin C',
        imageUrl: '',
      },
      {
        id: 2,
        title: 'A',
        artist_display: 'Artist B',
        artist_title: 'Title B',
        credit_line: 'Credit B',
        date_end: 2021,
        date_start: 2019,
        dimensions: '20x20',
        gallery_title: 'Gallery B',
        image_id: '2',
        is_on_view: false,
        is_public_domain: true,
        place_of_origin: 'Origin B',
        imageUrl: '',
      },
    ]);
  });

  it('should sort artworks from old to new by date_end', () => {
    const result = sortDataByType({ data: artworks, type: 'oldToNew' });
    expect(result).toEqual([
      {
        id: 2,
        title: 'A',
        artist_display: 'Artist B',
        artist_title: 'Title B',
        credit_line: 'Credit B',
        date_end: 2021,
        date_start: 2019,
        dimensions: '20x20',
        gallery_title: 'Gallery B',
        image_id: '2',
        is_on_view: false,
        is_public_domain: true,
        place_of_origin: 'Origin B',
        imageUrl: '',
      },
      {
        id: 3,
        title: 'B',
        artist_display: 'Artist C',
        artist_title: 'Title C',
        credit_line: 'Credit C',
        date_end: 2022,
        date_start: 2020,
        dimensions: '15x15',
        gallery_title: 'Gallery C',
        image_id: '3',
        is_on_view: true,
        is_public_domain: false,
        place_of_origin: 'Origin C',
        imageUrl: '',
      },
      {
        id: 1,
        title: 'C',
        artist_display: 'Artist A',
        artist_title: 'Title A',
        credit_line: 'Credit A',
        date_end: 2023,
        date_start: 2020,
        dimensions: '10x10',
        gallery_title: 'Gallery A',
        image_id: '1',
        is_on_view: true,
        is_public_domain: true,
        place_of_origin: 'Origin A',
        imageUrl: '',
      },
    ]);
  });

  it('should sort artworks from new to old by date_end', () => {
    const result = sortDataByType({ data: artworks, type: 'newToOld' });
    expect(result).toEqual([
      {
        id: 1,
        title: 'C',
        artist_display: 'Artist A',
        artist_title: 'Title A',
        credit_line: 'Credit A',
        date_end: 2023,
        date_start: 2020,
        dimensions: '10x10',
        gallery_title: 'Gallery A',
        image_id: '1',
        is_on_view: true,
        is_public_domain: true,
        place_of_origin: 'Origin A',
        imageUrl: '',
      },
      {
        id: 3,
        title: 'B',
        artist_display: 'Artist C',
        artist_title: 'Title C',
        credit_line: 'Credit C',
        date_end: 2022,
        date_start: 2020,
        dimensions: '15x15',
        gallery_title: 'Gallery C',
        image_id: '3',
        is_on_view: true,
        is_public_domain: false,
        place_of_origin: 'Origin C',
        imageUrl: '',
      },
      {
        id: 2,
        title: 'A',
        artist_display: 'Artist B',
        artist_title: 'Title B',
        credit_line: 'Credit B',
        date_end: 2021,
        date_start: 2019,
        dimensions: '20x20',
        gallery_title: 'Gallery B',
        image_id: '2',
        is_on_view: false,
        is_public_domain: true,
        place_of_origin: 'Origin B',
        imageUrl: '',
      },
    ]);
  });

  it('should return the original data when type is default', () => {
    const result = sortDataByType({ data: artworks, type: 'default' });
    expect(result).toEqual(artworks);
  });
});
