import { ChangeEvent, FC, } from "react"
import '../SelectField/style.scss'

interface SelectFieldProps {
    handleSort: (sortType: 'asc' | 'desc' | 'oldToNew' | 'newToOld' | '') => void,
    sortType: 'asc' | 'desc' | 'oldToNew' | 'newToOld' | '',
}




export const SelectField: FC<SelectFieldProps> = ({ handleSort, sortType }) => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        handleSort(event.target.value as 'asc' | 'desc' | 'oldToNew' | 'newToOld' | '')
    }

    return (<div className="select-div">

        <select className="select" title="select" value={sortType} onChange={handleChange}>
            <option value="">Select sort type</option>
            <option value="asc">Title ascending</option>
            <option value="desc" >Title descending</option>
            <option value="oldToNew" >Old to new</option>
            <option value="newToOld" >New to Old</option>
        </select>
    </div>)
}