import { ChangeEvent, FC, } from "react"


interface SelectFieldProps {
    handleSort: (sortType: 'asc' | 'desc' | '') => void,
    sortType: 'asc' | 'desc' | '',
}




export const SelectField: FC<SelectFieldProps> = ({ handleSort, sortType }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        handleSort(event.target.value as 'asc' | 'desc' | '')
    }

    return (<select title="select" value={sortType} onChange={handleChange}>
        <option value="">Select sort type</option>
        <option value="asc">Title ascending</option>
        <option value="desc" >Title descending</option>
    </select>)
}