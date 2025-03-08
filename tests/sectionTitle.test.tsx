import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { SectionTitle } from '../src/Components/sectionTitle';
import '../src/components/sectionTitle/style';

describe('SectionTitle Component', () => {
  jest.mock('../src/components/sectionTitle/style', () => ({
    'body-title': 'body-title-mock',
  }));

  it('renders the SectionTitle with text', () => {
    const testTitle = 'Test SectionTitle';
    render(<SectionTitle title={testTitle} />);

    expect(screen.getByText(testTitle)).toBeInTheDocument();
  });

  it('renders the title with ReactNode', () => {
    const testNode = <>Test Node</>;
    render(<SectionTitle title={testNode} />);

    expect(screen.getByText('Test Node')).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const testTitle = 'Test Title';
    render(<SectionTitle title={testTitle} />);

    const titleElement = screen.getByText(testTitle).parentElement;
    expect(titleElement).toHaveClass('body-title');
  });
});
