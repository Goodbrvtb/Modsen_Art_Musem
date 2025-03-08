import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { NotFound } from '../src/pages/notFound/notFound';

jest.mock('@/components/header', () => ({
  Header: () => <div>Header</div>,
}));

jest.mock('@/components/footer', () => ({
  Footer: () => <div>Footer</div>,
}));

describe('NotFound', () => {
  it('renders correctly', () => {
    render(<NotFound />);

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });
});
