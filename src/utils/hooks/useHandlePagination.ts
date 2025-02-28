import { useCallback, useState } from 'react';

interface UseHandlePaginationCurrentPage {
  currentPage: number;
  handleCurrentPageChange: (pageNumber: number) => void;
}

export const useHandlePagination = (): UseHandlePaginationCurrentPage => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleCurrentPageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);
  return {
    currentPage,
    handleCurrentPageChange,
  };
};
