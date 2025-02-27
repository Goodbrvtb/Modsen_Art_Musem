import { checkFavoritesDetailInfo } from '../src/utils/checkFavoritesDetailInfo';
import { ArtWork } from '../src/utils/types';

describe('checkFavoritesDetailInfo', () => {
  const favorites: ArtWork[] = [
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

  it('should return true if the artwork is in favorites', () => {
    const result = checkFavoritesDetailInfo(favorites, '1');
    expect(result).toBe(true);
  });

  it('should return true if the artwork is in favorites (string id)', () => {
    const result = checkFavoritesDetailInfo(favorites, '2');
    expect(result).toBe(true);
  });

  it('should return false if the artwork is not in favorites', () => {
    const result = checkFavoritesDetailInfo(favorites, '3');
    expect(result).toBe(false);
  });

  it('should return false if favorites array is empty', () => {
    const result = checkFavoritesDetailInfo([], '1');
    expect(result).toBe(false);
  });
});
