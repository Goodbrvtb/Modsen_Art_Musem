import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Title } from '../src/Components/title';
import '../src/components/title/style';

describe('Title Component', () => {
  jest.mock('../src/components/title/style', () => ({
    'home-title': 'home-title-mock',
  }));

  it('renders the title with text', () => {
    const testTitle = 'Test Title';
    render(<Title title={testTitle} />);

    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  it('renders the title with ReactNode', () => {
    const testNode = <span>Test Node</span>;
    render(<Title title={testNode} />);

    expect(screen.getByText('Test Node')).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const testTitle = 'Test Title';
    render(<Title title={testTitle} />);

    const titleElement = screen.getByText(testTitle).parentElement;
    expect(titleElement).toHaveClass('home-title');
  });
});
