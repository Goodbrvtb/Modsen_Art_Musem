import { FC } from "react";
import './style.scss';
import shapeNext from "../../assets/logos/shapeNext.svg";
interface PaginationProps {
    currentPage: number,
    lastPage: number,
    setCurrentPage: (pageNumber: number) => void,

}

export const Pagination: FC<PaginationProps> = ({ currentPage, setCurrentPage, lastPage }) => {
    const handleClickNext = () => {
        setCurrentPage(currentPage + 1)
    }
    const handleClickPrev = () => {
        setCurrentPage(currentPage - 1)
    }

    const handleClickPage = (newPage: number) => {
        setCurrentPage(newPage)
    }
    const getPaginationNumbers = () => {
        let start = Math.max(currentPage - Math.floor(4 / 2), 1);
        const end = Math.min(start + 4 - 1, lastPage);

        if (end - start + 1 < 4) {
            start = Math.max(end - 4 + 1, 1)
        }
        const pages = [];
        for (let i = start; i <= end; i++) {
            pages.push(i)
        }
        return pages
    }

    return (

        <div className="pagination-div">
            {!(currentPage === 1) && (<button title='prev-button' className="button-click-prev" onClick={handleClickPrev}>
                <img className="img-click-prev" src={shapeNext} alt=""></img>

            </button>)}
            <div className="pagination">

                {getPaginationNumbers().map((pageNumber) => {
                    return (

                        <button className="buttonClickNext" onClick={() => handleClickPage(pageNumber)} style={{ backgroundColor: `${currentPage == pageNumber ? 'red' : 'test'}` }}>
                            <div className="pagination-1">{pageNumber}</div>
                        </button>

                    )
                })}




                <button className="button-click-next" title='next-button' onClick={handleClickNext}>
                    <img className="img-click-next" src={shapeNext} alt=""></img>
                </button>

            </div>



            {/* <div className="pagination1">

                {[...Array(totalPages)].map((_, index) => (

                    <button

                        key={index}

                        onClick={() => setCurrentPage(index + 1)}

                        className={currentPage === index + 1 ? 'active' : ''}

                    >

                        {index + 1}

                    </button>

                ))}

            </div> */}
        </div>
    )
}