
import  search from "../assets/logos/search.svg"
import './SearchBar.scss'; 
// import { useEffect, useState } from "react";
 import {fetchApi} from "../utils/apiApp"
// import {setId} from "../utils/apiApp"




export  const SearchBar = () => {

    return (
      <div className="search-bar">
        <input type="text" placeholder="Search art, artist, work..." className="search-input" />
        <button onClick={fetchApi} className="search-button">
       <img alt="search" className="img-search" src={search}></img>
        </button>
      </div>
    );
  }