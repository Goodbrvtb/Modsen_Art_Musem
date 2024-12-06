import { FC } from "react";

interface PaginationProps {
    currentPage: number,
    lastPage: number,
    setCurrentPage: (pageNumber: number) => void,
}


export const Pagination: FC<PaginationProps> = ({ currentPage, setCurrentPage, lastPage }) => {
    const handleClick = () => {
        setCurrentPage(currentPage + 1)
    }
    return (

        <div className="pagination">
            <div>{currentPage}</div>
            <button onClick={handleClick}>next</button>

        </div>
    )
}