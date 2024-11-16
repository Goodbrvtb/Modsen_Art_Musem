import { FC } from 'react';
import { useNavigate } from "react-router-dom";
import bookmark from "../../assets/logos/bookmark.svg";
import logo from "../../assets/logos/museum-logo.svg";
import { FAVORITE_ROUTE } from "../../routes";
import './style.scss';


export const Header: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(FAVORITE_ROUTE);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo" >

          <img className="logo-img" src={logo} alt="" ></img>
        </div>
        <div className='favorites'>
          <button onClick={handleClick}>
            <img src={bookmark} alt=""></img>
            <div className='your-favorites'>Your favorites </div>
          </button>
        </div>
      </div>
    </header>
  );
};


