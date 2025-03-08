import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { DetailInfo } from '../src/pages/detailInfo/detailInfo';

jest.mock('@/components/header', () => ({
  Header: () => <div>Header</div>,
}));
jest.mock('@/components/detailInfo', () => ({
  DetailCart: () => <div>DetailCart</div>,
}));

jest.mock('@/components/footer', () => ({
  Footer: () => <div>Footer</div>,
}));

jest.mock('@/utils/hooks/useGetDetailInfo', () => ({
  useArtWorkApiAxios: jest.fn(() => ({
    id: '75644',
  })),
}));

jest.mock('@/utils/hooks/useHandleFavIdChange', () => ({
  useHandleFavIdChange: jest.fn(() => ({
    favoritesIds: [],
    handleFavoritesChange: jest.fn(),
  })),
}));

describe('DetailInfo', () => {
  it('renders correctly', () => {
    render(<DetailInfo />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(
      screen.getByText('Error: Artwork ID not specified'),
    ).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
