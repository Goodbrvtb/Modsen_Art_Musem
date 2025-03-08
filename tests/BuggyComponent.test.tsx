import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { BuggyComponent } from '../src/Components/BuggyComponent';
import ErrorBoundary from '../src/Components/ErrorBoundary';
import '../src/components/title/style';

test('ErrorBoundary catches error and displays fallback UI', () => {
  jest.mock('../src/components/title/style', () => ({
    'home-title': 'home-title-mock',
  }));
  const consoleErrorSpy = jest
    .spyOn(console, 'error')
    .mockImplementation(() => {});

  const { getByText } = render(
    <ErrorBoundary>
      <BuggyComponent />
    </ErrorBoundary>,
  );

  expect(getByText(/Error!/)).toBeInTheDocument();

  consoleErrorSpy.mockRestore();
});
