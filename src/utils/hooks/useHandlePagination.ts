import { useCallback, useState } from 'react';

// TODO: rename interface!!!!
interface UseHandlePaginationCurrentPage {
  currentPage: number;
  handleCurrentPageChange: (pageNumber: number) => void;
}

//указать тип возвращаемого значения функции
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
