import { FC } from 'react';

import shapeNext from '@assets/icons/shape-next.svg';

import './style.scss';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (pageNumber: number) => void;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  setCurrentPage,
  lastPage,
}) => {
  const handleClickNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleClickPage = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const getPaginationNumbers = () => {
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

  return (
    <>
      {lastPage ? (
        <div className="pagination-div">
          {!(currentPage === 1) && (
            <button
              title="prev-button"
              className="button-click-prev"
              onClick={handleClickPrev}>
              <img className="img-click-prev" src={shapeNext} alt=""></img>
            </button>
          )}
          <div className="pagination">
            {getPaginationNumbers().map((pageNumber) => {
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
              <img className="img-click-next" src={shapeNext} alt=""></img>
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
