import {  useEffect, useState } from "react"
import { getArtWorksByIdApiAxios, getOtherArtWorksApiAxios } from "../apiApp"
import { IMAGE_ENDPOINT } from "../../constants/api"

export const useGetOtherArtWorks = () => {
    const [data, setData] = useState<any>([])  //data-само значение setData - функция для установки нового значения в data

    useEffect(() => {                                   //при монтировании компонента отрабатывает хук и возвращает ссылку на картинку
        async function getArtWorks() {
            const artWorks = await getOtherArtWorksApiAxios()
            const artWorkFullInfo = await Promise.all(artWorks.data.map(async ({id}) => {
                const {data} = await getArtWorksByIdApiAxios(id)
                console.log(data, "artWorkWithImage")

                return {
                    ...data,
                    imageUrl:IMAGE_ENDPOINT(data.image_id)
                }
            }))
            setData(artWorkFullInfo)
        }

        void getArtWorks() // зачем void?? вызов функции но без вывода значения
    },[])

    return { otherArtWorks: data }
}