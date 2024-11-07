import {FC} from 'react';
import './style.scss'; 
import  logo from "../../assets/logos/museum-logo.svg"
import  bookmark from "../../assets/logos/bookmark.svg"
import { NavLink } from "react-router-dom";



export const Header: FC = () => {
  return (
    <header className="header">
      <div className="top-bar">
      <div className="logo" >
        
        <img className="logo-img" src={logo} alt="" ></img>
      </div>
      <div className='favorites'>
      <img src={bookmark} alt=""></img>
      <NavLink to="/fav" className='your-favorites'>Your favorites </NavLink>
      </div>
      </div>
    </header>
  );
};


