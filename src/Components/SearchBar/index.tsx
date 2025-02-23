import { ChangeEvent, FC, useState } from 'react';

import search from '@assets/icons/search.svg';
import { useDebounce } from '@utils/hooks/useDebounce';
import { checkCyrillic } from '@utils/validation';

import { TIMEOUT } from '../../constants/api';
import './style.scss';

interface SearchBarProps {
  setSearchValue: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ setSearchValue }) => {
  const [showError, setShowError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    if (checkCyrillic(value)) {
      setShowError(true);
    } else {
      setShowError(false);
      setSearchValue(value);
    }
  };
  const debounceHandleChange = useDebounce(handleChange, TIMEOUT);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchValue(inputValue);
    }
  };
  return (
    <div className="search-bar-center">
      <div className="search-bar">
        <input
          type="text"
          onChange={debounceHandleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search art, artist, work..."
          className="search-input"
        />

        <button className="search-button">
          <img alt="search" className="img-search" src={search}></img>
        </button>
      </div>
      <div className="search-bar-error">
        {showError && <p>Only Latin alphabet and numbers!</p>}
      </div>
    </div>
  );
};
