import React from 'react';
import './style.scss';
import LogoFt from "@assets/icons/museum-logo-2.svg"
import LogoMod from "@assets/icons/logo-modsen.svg"

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-Bar">
        <div className="logo-Footer">
          <img src={LogoFt} alt=""></img>
        </div>
        <div className='logo-Moodsen'>
          <img src={LogoMod} alt=""></img>
        </div>
      </div>
    </footer>
  );
}


