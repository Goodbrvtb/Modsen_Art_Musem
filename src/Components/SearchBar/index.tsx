
import { ChangeEvent, FC, useState } from "react";
import search from "@assets/icons/search.svg";
import { useDebounce } from "@utils/hooks/useDebounce";
import './style.scss';

interface SearchBarProps {
  setSearchValue: (value: string) => void
}

export const SearchBar: FC<SearchBarProps> = ({ setSearchValue }) => {

  const [showError, setShowError] = useState(false);
  const checkCyrillic = (text) => {
    const cyrillicPattern = /[\u0400-\u04FF]/;
    return cyrillicPattern.test(text);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (checkCyrillic(value)) {
      console.log(event.target.value, "ВВод")
      setShowError(true);
    } else {
      setShowError(false);
      setSearchValue(event.target.value)
    }


  }

  const debounceHandleChange = useDebounce(handleChange, 1000)

  return (
    <div className="search-bar">
      <input type="text" onChange={debounceHandleChange} placeholder="Search art, artist, work..." className="search-input" />
      {showError && (
        <p className="search-bar-error">Only Latin alphabet and numbers!</p>
      )}
      <button className="search-button">
        <img alt="search" className="img-search" src={search}></img>
      </button>
    </div>

  );

}