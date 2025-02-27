import { getPaginationNumbers } from '../src/utils/getPaginationNumbers';
import { PaginationProps } from '../src/utils/types';

describe('getPaginationNumbers', () => {
  test('should return correct pagination for middle page', () => {
    const props: PaginationProps = {
      currentPage: 4,
      lastPage: 10,
      setCurrentPage: jest.fn(),
    };
    const result = getPaginationNumbers(props);
    expect(result).toEqual([2, 3, 4, 5]);
  });

  test('should return correct pagination for first page', () => {
    const props: PaginationProps = {
      currentPage: 1,
      lastPage: 10,
      setCurrentPage: jest.fn(),
    };
    const result = getPaginationNumbers(props);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should return correct pagination for last page', () => {
    const props: PaginationProps = {
      currentPage: 10,
      lastPage: 10,
      setCurrentPage: jest.fn(),
    };
    const result = getPaginationNumbers(props);
    expect(result).toEqual([7, 8, 9, 10]);
  });

  test('should return correct pagination when there are fewer than 4 pages', () => {
    const props: PaginationProps = {
      currentPage: 2,
      lastPage: 3,
      setCurrentPage: jest.fn(),
    };
    const result = getPaginationNumbers(props);
    expect(result).toEqual([1, 2, 3]);
  });

  test('should return correct pagination for edge case with only 1 page', () => {
    const props: PaginationProps = {
      currentPage: 1,
      lastPage: 1,
      setCurrentPage: jest.fn(),
    };
    const result = getPaginationNumbers(props);
    expect(result).toEqual([1]);
  });
});
