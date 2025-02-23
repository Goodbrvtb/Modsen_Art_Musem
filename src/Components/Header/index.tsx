import { FC, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import bookmark from '@assets/icons/bookmark.svg';
import iconBurgerMenu from '@assets/icons/burger-button.svg';
import closeBurgerMenu from '@assets/icons/close-burger-button.svg';
import homeImg from '@assets/icons/home.svg';
import logo from '@assets/icons/museum-logo.svg';
import { useClickOutside } from '@utils/hooks/useClickOutside';

import { FAVORITE_ROUTE, HOME_ROUTE } from '../../routes';
import './style.scss';

export const Header: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const handleFavClick = () => {
    navigate(FAVORITE_ROUTE);
  };

  const handleHomeClick = () => {
    navigate(HOME_ROUTE);
  };

  const isHome = location.pathname == '/';
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => {
    setOpen(false);
  });

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo" onClick={handleHomeClick}>
          <img className="logo-img" src={logo} alt="logo-img-header"></img>
        </div>

        <div
          className={`fav-and-home-button ${isOpen ? 'active' : ''}`}
          ref={menuRef}>
          <button className="close-menu-button" onClick={handleToggleMenu}>
            <img src={closeBurgerMenu} alt="Close burger menu"></img>
          </button>
          <div className="navigate-button">
            {!isHome && (
              <div className="home">
                <button onClick={handleHomeClick}>
                  <img src={homeImg} alt="Home"></img>
                  <div className="home">Home </div>
                </button>
              </div>
            )}
            <div className="favorites">
              <button onClick={handleFavClick}>
                <img src={bookmark} alt="Favorites"></img>
                <div className="your-favorites">Your favorites </div>
              </button>
            </div>
          </div>
        </div>
        <button className="header-menu-button" onClick={handleToggleMenu}>
          <img src={iconBurgerMenu} alt="burger-button"></img>
        </button>
      </div>
    </header>
  );
};
