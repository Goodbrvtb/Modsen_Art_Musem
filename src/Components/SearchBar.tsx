
import search from "../assets/logos/search.svg"
import './SearchBar.scss';
import { ChangeEvent, useEffect, useState } from "react";
import { fetchApi } from "../utils/apiApp"
import { useDebaunce } from "../utils/hooks/useDebaunce";
// import {setId} from "../utils/apiApp"


export const SearchBar = () => {
  const [data, setData] = useState([])
  const [inputData, setInputData] = useState('')

  useEffect(() => {
    fetchApi(inputData).then((items) => setData(items))
  }, [inputData])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => { setInputData(event.target.value)
    console.log(inputData, "Inputdata")
   }
  const debounceHandleChange= useDebaunce(handleChange,1000)
  console.log(data, "OK")
  return (
    <div className="search-bar">
      <input onChange={debounceHandleChange} type="text" placeholder="Search art, artist, work..." className="search-input" />
      <button className="search-button">
        <img alt="search" className="img-search" src={search}></img>
      </button>
    </div>
  );
}