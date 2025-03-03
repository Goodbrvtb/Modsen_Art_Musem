import { FC } from 'react';

import shapeNext from '@assets/icons/shape-next.svg';
import { getPaginationNumbers } from '@utils/getPaginationNumbers';

import { PaginationProps } from '@/utils/types';

import { PAGE_INCREMENT } from '../../constants/api';
import './style.scss';

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  lastPage,
}) => {
  const handleClickNext = () => {
    setCurrentPage(currentPage + PAGE_INCREMENT);
  };
  const handleClickPrev = () => {
    setCurrentPage(currentPage - PAGE_INCREMENT);
  };

  const handleClickPage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {lastPage ? (
        <div className="pagination-div">
          {!(currentPage === PAGE_INCREMENT) && (
            <button
              title="prev-button"
              className="button-click-prev"
              onClick={handleClickPrev}>
              <img
                className="img-click-prev"
                src={shapeNext}
                alt="click-prev"></img>
            </button>
          )}
          <div className="pagination">
            {getPaginationNumbers({
              currentPage,
              setCurrentPage,
              lastPage,
            }).map((pageNumber) => {
              return (
                <button
                  className={`button-pagination${currentPage == pageNumber ? '-active' : ''}`}
                  onClick={() => handleClickPage(pageNumber)}>
                  {pageNumber}
                </button>
              );
            })}

            <button
              className="button-click-next"
              title="next-button"
              onClick={handleClickNext}>
              <img
                className="img-click-next"
                src={shapeNext}
                alt="click-next"></img>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
