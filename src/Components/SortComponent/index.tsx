import { Dispatch, FC, SetStateAction, useState } from "react"
import { sortDataByType } from "../../utils/sortUtil"
import { SelectField } from "./SelectField"



interface SortComponentProps {
    data: {
        id: number;
        title: string;
        imageUrl: string;
        artist_display: string;
        is_public_domain: boolean;
        artist_title: string;
    }[],
    setData: Dispatch<SetStateAction<any[]>>,


}



export const SortComponent: FC<SortComponentProps> = ({ data, setData }) => {

    const [sortType, setSortType] = useState<'asc' | 'desc' | 'oldToNew' | 'newToOld' | ''>('')
    const handleSort = (sortType: 'asc' | 'desc' | 'oldToNew' | 'newToOld' | '') => {
        const sortedData = sortDataByType({ data: data, type: sortType })
        setData(sortedData)
        setSortType(sortType)
    }
    return (
        <>
            {data.length ? (
                <SelectField handleSort={handleSort} sortType={sortType} ></SelectField >
            ) : null}
        </>
    )

}