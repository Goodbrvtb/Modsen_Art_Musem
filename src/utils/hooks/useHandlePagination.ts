import { useCallback, useState } from "react"

// TODO: rename interface!!!!
interface UseHandlePaginationCurrentPage {
    currentPage: number,
    handleCurrentPageChange: (pageNumber: number) => void,

}

export const useHandlePagination = (): UseHandlePaginationCurrentPage => {
    const [currentPage, setCurrentPage] = useState(1)
    // (handleCurrentPageChange, setHandleCurrentPageChange)useState
    const handleCurrentPageChange = useCallback((pageNumber: number) => { setCurrentPage(pageNumber) }, [])
    return {
        currentPage, handleCurrentPageChange
    }

}