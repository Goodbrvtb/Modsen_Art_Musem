import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import bookmark from "../../assets/logos/bookmark.svg";
import homeimg from "../../assets/logos/home.svg";
import logo from "../../assets/logos/museum-logo.svg";
import { FAVORITE_ROUTE, HOME_ROUTE } from "../../routes";
import './style.scss';
import iconBurgerMenu from "../../assets/logos/burgerButton.svg"
import closeBurgerMenu from "../../assets/logos/closeBurgerButton.svg"


export const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleFavClick = () => {
    navigate(FAVORITE_ROUTE);
  };
  const handleHomeClick = () => {
    navigate(HOME_ROUTE);
  };
  const isHome = location.pathname == '/'
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo" onClick={handleHomeClick}>
          <img className="logo-img" src={logo} alt="" ></img>
        </div>

        <div className={`fav-and-home-button ${isOpen ? "active" : ""}`} >
          <button className='close-menu-button' onClick={() => setOpen(!isOpen)}>
            <img src={closeBurgerMenu} alt="Close burger menu"></img>
          </button>
          <div className='navigate-button' >

            {!isHome && (<div className='home'>
              <button onClick={handleHomeClick}>
                <img src={homeimg} alt="Home"></img>
                <div className='home'>Home </div>
              </button>
            </div>)}

            <div className='favorites'>
              <button onClick={handleFavClick}>
                <img src={bookmark} alt="Favorites"></img>
                <div className='your-favorites'>Your favorites </div>
              </button>

            </div>
          </div>

        </div>
        <button className='header-menu-button' onClick={() => setOpen(!isOpen)}>
          <img src={iconBurgerMenu} alt="burgerButton"></img>
        </button>
      </div>
    </header >
  );
};


