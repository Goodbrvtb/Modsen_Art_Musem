import React from 'react';

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { BuggyComponent } from '../src/Components/BuggyComponent';
import ErrorBoundary from '../src/Components/ErrorBoundary';

test('ErrorBoundary catches error and displays fallback UI', () => {
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
