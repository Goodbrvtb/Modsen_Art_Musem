import { useEffect, useState } from "react"
import { IMAGE_ENDPOINT } from "../../constants/api"
import { getArtWorksByIdApiAxios, searchArtWorksApiAxios } from "../apiApp"
import { UseArtWorksApiAxiosProps } from "../types"



export const useArtWorksApiAxios = ({ searchValue }: UseArtWorksApiAxiosProps) => {
    const [data, setData] = useState<any>([])  //data-само значение setData - функция для установки нового значения в data

    useEffect(() => {                                   //при монтировании компонента отрабатывает хук и возвращает ссылку на картинку
        async function getArtWorks() {
            const artWorks = await searchArtWorksApiAxios(searchValue)
            const artWorkFullInfo = await Promise.all(artWorks.data.map(async ({ id }) => {
                const { data } = await getArtWorksByIdApiAxios(id)
                console.log(data, "artWorkWithImage")

                return {
                    ...data,
                    imageUrl: IMAGE_ENDPOINT(data.image_id),
                }
            }))
            setData(artWorkFullInfo)
        }

        void getArtWorks() // зачем void?? вызов функции но без вывода значения
    }, [searchValue])

    return { artWorksList: data }
}