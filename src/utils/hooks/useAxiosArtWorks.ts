import { useEffect, useState } from "react"
import { IMAGE_ENDPOINT } from "../../constants/api"
import { getArtWorksByIdApiAxios, searchArtWorksApiAxios } from "../apiApp"
import { UseArtWorksApiAxiosProps } from "../types"



export const useArtWorksApiAxios = ({ searchValue, selectedPage }: UseArtWorksApiAxiosProps) => {
    const [data, setData] = useState<any>([])  //data-само значение setData - функция для установки нового значения в data
    const [currentPage, setCurrentPage] = useState(1)  //data-само значение setData - функция для установки нового значения в data
    const [totalPages, setTotalPages] = useState(1)  //data-само значение setData - функция для установки нового значения в data

    useEffect(() => {                                   //при монтировании компонента отрабатывает хук и возвращает ссылку на картинку
        async function getArtWorks() {
            const { data, pagination } = await searchArtWorksApiAxios(searchValue, selectedPage)
            const artWorkFullInfo = await Promise.all(data.map(async ({ id }) => {
                const { data } = await getArtWorksByIdApiAxios(id)


                return {
                    ...data,
                    imageUrl: IMAGE_ENDPOINT(data.image_id),
                }
            }))
            setData(artWorkFullInfo)
            setCurrentPage(pagination.current_page)
            setTotalPages(pagination.total_pages)
        }

        void getArtWorks() // зачем void?? вызов функции но без вывода значения
    }, [searchValue, selectedPage])

    return { artWorksList: data, totalPages, currentPage, setData }
}