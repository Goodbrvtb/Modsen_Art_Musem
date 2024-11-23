import { FC, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import bookmark from "../../assets/logos/bookmark.svg";
import logo from "../../assets/logos/museum-logo.svg";
import { FAVORITE_ROUTE, HOME_ROUTE } from "../../routes";
import './style.scss';


export const Header: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('Current location is ', location);
  }, [location]);

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
        <div className="logo" >

          <img className="logo-img" src={logo} alt="" ></img>
        </div>

        <div className='favorites'>
          <button onClick={handleFavClick}>
            <img src={bookmark} alt=""></img>
            <div className='your-favorites'>Your favorites </div>
          </button>
        </div>

        {!isHome && (<div className='favorites'>
          <button onClick={handleHomeClick}>
            <img src={bookmark} alt=""></img>
            <div className='your-favorites'>Home </div>
          </button>
        </div>)}
      </div>
    </header>
  );
};


