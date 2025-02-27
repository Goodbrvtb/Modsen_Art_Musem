import { checkFavorites } from '../src/utils/checkFavorites';
import { ArtWork } from '../src/utils/types';

describe('checkFavorites', () => {
  test('should return true if artwork is in favorites', () => {
    const favoritesIds: ArtWork[] = [
      {
        artist_display: 'Artist 1',
        artist_title: 'Artist Title 1',
        credit_line: 'Credit Line 1',
        date_end: 2020,
        date_start: 2000,
        dimensions: '20x30',
        gallery_title: 'Gallery 1',
        id: 1,
        image_id: 'image1',
        is_on_view: true,
        is_public_domain: true,
        place_of_origin: 'Origin 1',
        title: 'Artwork 1',
      },
      {
        artist_display: 'Artist 2',
        artist_title: 'Artist Title 2',
        credit_line: 'Credit Line 2',
        date_end: 2021,
        date_start: 2010,
        dimensions: '30x40',
        gallery_title: 'Gallery 2',
        id: 2,
        image_id: 'image2',
        is_on_view: false,
        is_public_domain: true,
        place_of_origin: 'Origin 2',
        title: 'Artwork 2',
      },
    ];
    const artWork: ArtWork = {
      artist_display: 'Artist 1',
      artist_title: 'Artist Title 1',
      credit_line: 'Credit Line 1',
      date_end: 2020,
      date_start: 2000,
      dimensions: '20x30',
      gallery_title: 'Gallery 1',
      id: 1,
      image_id: 'image1',
      is_on_view: true,
      is_public_domain: true,
      place_of_origin: 'Origin 1',
      title: 'Artwork 1',
    };

    const result = checkFavorites(favoritesIds, artWork);

    expect(result).toBe(true);
  });

  test('should return false if artwork is not in favorites', () => {
    const favoritesIds: ArtWork[] = [
      {
        artist_display: 'Artist 1',
        artist_title: 'Artist Title 1',
        credit_line: 'Credit Line 1',
        date_end: 2020,
        date_start: 2000,
        dimensions: '20x30',
        gallery_title: 'Gallery 1',
        id: 1,
        image_id: 'image1',
        is_on_view: true,
        is_public_domain: true,
        place_of_origin: 'Origin 1',
        title: 'Artwork 1',
      },
      {
        artist_display: 'Artist 2',
        artist_title: 'Artist Title 2',
        credit_line: 'Credit Line 2',
        date_end: 2021,
        date_start: 2010,
        dimensions: '30x40',
        gallery_title: 'Gallery 2',
        id: 2,
        image_id: 'image2',
        is_on_view: false,
        is_public_domain: true,
        place_of_origin: 'Origin 2',
        title: 'Artwork 2',
      },
    ];
    const artWork: ArtWork = {
      artist_display: 'Artist 3',
      artist_title: 'Artist Title 3',
      credit_line: 'Credit Line 3',
      date_end: 2022,
      date_start: 2015,
      dimensions: '15x25',
      gallery_title: 'Gallery 3',
      id: 3,
      image_id: 'image3',
      is_on_view: true,
      is_public_domain: true,
      place_of_origin: 'Origin 3',
      title: 'Artwork 3',
    };

    const result = checkFavorites(favoritesIds, artWork);

    expect(result).toBe(false);
  });

  test('should return false if favorites list is empty', () => {
    const favoritesIds: ArtWork[] = [];
    const artWork: ArtWork = {
      artist_display: 'Artist 1',
      artist_title: 'Artist Title 1',
      credit_line: 'Credit Line 1',
      date_end: 2020,
      date_start: 2000,
      dimensions: '20x30',
      gallery_title: 'Gallery 1',
      id: 1,
      image_id: 'image1',
      is_on_view: true,
      is_public_domain: true,
      place_of_origin: 'Origin 1',
      title: 'Artwork 1',
    };

    const result = checkFavorites(favoritesIds, artWork);

    expect(result).toBe(false);
  });
});
