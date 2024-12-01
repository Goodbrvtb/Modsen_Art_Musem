import { useEffect, useState } from "react"
import { getArtWorksByIdApiAxios } from "../apiApp"
import { ArtWorkType, UseArtWorkApiAxiosProps } from "../types"
import { IMAGE_ENDPOINT } from "../../constants/api"



export const useArtWorkApiAxios = ({ id }: UseArtWorkApiAxiosProps) => {
    const [info, setInfo] = useState<any>()
    useEffect(() => {
        async function getInfo(id: number) {
            const info = await getArtWorksByIdApiAxios(id)
            const fullInfo = {
                ...info,
                imgUrl: IMAGE_ENDPOINT(info.data.image_id)
            }

            setInfo(fullInfo)
        }
        void getInfo(id)
    }, [id])

    return { info }
}