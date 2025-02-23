import { PaginationProps } from '@utils/types';

export const getPaginationNumbers = ({
  currentPage,
  lastPage,
}: PaginationProps) => {
  let start = Math.max(currentPage - Math.floor(4 / 2), 1);
  const end = Math.min(start + 4 - 1, lastPage);

  if (end - start + 1 < 4) {
    start = Math.max(end - 4 + 1, 1);
  }
  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
};
