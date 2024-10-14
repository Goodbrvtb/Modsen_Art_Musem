import React from 'react';
import './Footer.scss'; 
import  LogoFt from "../assets/logos/museum-logo 2.svg"
import  LogoMod from "../assets/logos/logo modsen-02 2.svg"

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


