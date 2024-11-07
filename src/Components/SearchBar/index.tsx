
import search from "../../assets/logos/search.svg"
import './style.scss';
import { ChangeEvent, useEffect, useState } from "react";
import { fetchApi } from "../../utils/apiApp"
import { useDebounce } from "../../utils/hooks/useDebounce";
import { SpecialGallery } from "../SpecialGallery/index";


export const SearchBar = () => {
  const [data, setData] = useState([])  //data-само значение setData - функция для установки нового значения в data
  const [inputData, setInputData] = useState('')

  useEffect(() => {
    fetchApi(inputData).then((items) => setData(items.data))
  }, [inputData])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value)
    console.log(inputData, "Inputdata")
  }
  const debounceHandleChange = useDebounce(handleChange, 1000)
  console.log(data, "OK")

  return (
   <> <div className="search-bar">
      <input onChange={debounceHandleChange} type="text" placeholder="Search art, artist, work..." className="search-input" />
      <button className="search-button">
        <img alt="search" className="img-search" src={search}></img>
      </button>
    </div>
    <SpecialGallery artWorks={data}/> 
    </>
  );

}