
import { ChangeEvent, FC } from "react";
import search from "../../assets/logos/search.svg";
import { useDebounce } from "../../utils/hooks/useDebounce";
import './style.scss';

interface SearchBarProps {
  setSearchValue: (value: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ setSearchValue }) => {


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    // console.log(inputData, "Inputdata")
  }
  const debounceHandleChange = useDebounce(handleChange, 1000)

  return (
     <div className="search-bar">
      <input onChange={debounceHandleChange} type="text" placeholder="Search art, artist, work..." className="search-input" />
      <button className="search-button">
        <img alt="search" className="img-search" src={search}></img>
      </button>
    </div>

  );

}