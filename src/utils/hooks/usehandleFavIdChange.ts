import { useEffect, useState } from "react"
import { FAVORITES_KEY } from "../../constants/api"

export const useHandleFavIdChange = () => {

    const [favoritesIds, setFavoritesIds] = useState<any>([])  //data-само значение setData - функция для установки нового значения в data

    function handleFavoritesChange(artWork: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
    }) {
        const favoritesIdsCurrent = [...favoritesIds];
        const filteredFavoritesIds = favoritesIdsCurrent.filter((item) => (item.id !== artWork.id))
        console.log(favoritesIdsCurrent, 'favoritesIdsCurrent')
        console.log(filteredFavoritesIds, 'filteredFavoritesIds')
        if (favoritesIdsCurrent.length == 0 || favoritesIdsCurrent.length == filteredFavoritesIds.length) {
            console.log('setFavoritesIds')
            setFavoritesIds((prev) => {
                return [...prev, artWork]

            })
            filteredFavoritesIds.push(artWork)
        } else {
            setFavoritesIds(filteredFavoritesIds)

        }
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(filteredFavoritesIds))

    }

    useEffect(() => {
        const existedFavoritesIds = localStorage.getItem(FAVORITES_KEY)
        if (existedFavoritesIds) {
            setFavoritesIds(JSON.parse(existedFavoritesIds))
        }
    }, [])


    return { favoritesIds, handleFavoritesChange }






}