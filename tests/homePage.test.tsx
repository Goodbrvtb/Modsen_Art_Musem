import React, { ReactNode } from 'react';

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { HomePage } from '../src/pages/homePage/homePage';

jest.mock('@/components/header', () => ({
  Header: () => <div>Header</div>,
}));

jest.mock('@/components/title', () => ({
  Title: ({ title }: { title: ReactNode }) => <h1>{title}</h1>,
}));

jest.mock('@/components/searchBar', () => ({
  SearchBar: ({
    setSearchValue,
  }: {
    setSearchValue: (value: string) => void;
  }) => (
    <input
      data-testid="search-input"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  ),
}));

jest.mock('@/components/specialGallery', () => ({
  SpecialGallery: () => <div>Special Gallery</div>,
}));

jest.mock('@/components/pagination', () => ({
  Pagination: () => <div>Pagination</div>,
}));

jest.mock('@/components/sortComponent', () => ({
  SortComponent: () => <div>Sort Component</div>,
}));

jest.mock('@/components/bodyTitleOther', () => ({
  BodyTitleOther: () => <div>Body Title Other</div>,
}));

jest.mock('@/components/otherGallery', () => ({
  OtherGallery: () => <div>Other Gallery</div>,
}));

jest.mock('@/components/footer', () => ({
  Footer: () => <div>Footer</div>,
}));

jest.mock('@/utils/hooks/useAxiosArtWorks', () => ({
  useArtWorksApiAxios: jest.fn(() => ({
    artWorksList: [],
    totalPages: 1,
    setData: jest.fn(),
  })),
}));

jest.mock('@/utils/hooks/useGetOtherArtWorks', () => ({
  useGetOtherArtWorks: jest.fn(() => ({
    otherArtWorks: [],
  })),
}));

jest.mock('@/utils/hooks/useHandlePagination', () => ({
  useHandlePagination: jest.fn(() => ({
    currentPage: 1,
    handleCurrentPageChange: jest.fn(),
  })),
}));

jest.mock('@/utils/hooks/useHandleFavIdChange', () => ({
  useHandleFavIdChange: jest.fn(() => ({
    favoritesIds: [],
    handleFavoritesChange: jest.fn(),
  })),
}));

describe('HomePage', () => {
  it('renders correctly and interacts with search input', () => {
    render(<HomePage />);
    expect(
      screen.getByRole('heading', { name: /Let's Find Some Art/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
    expect(screen.getByText('Body Title Other')).toBeInTheDocument();
    expect(screen.getByText('Special Gallery')).toBeInTheDocument();

    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'New Art' } });
  });
});
