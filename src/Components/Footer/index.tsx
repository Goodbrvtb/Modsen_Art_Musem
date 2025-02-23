import React from 'react';

import LogoMod from '@assets/icons/logo-modsen.svg';
import LogoFt from '@assets/icons/museum-logo-2.svg';

import './style.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-Bar">
        <div className="logo-Footer">
          <img src={LogoFt} alt="logo-Footer"></img>
        </div>
        <div className="logo-Modsen">
          <img src={LogoMod} alt="logo-Modsen"></img>
        </div>
      </div>
    </footer>
  );
};
