import React from 'react';
import { Icon } from '@iconify/react';

interface ItemProps {
  logo: string;
}

function Navbar({ logo }: ItemProps) {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu-item">
            <a href="#">Home</a>
          </div>
          <div className="navbar-menu-item">
            <a href="#">About</a>
          </div>
          <div className="navbar-menu-item">
            <a href="#">Contact</a>
          </div>
          <div className="navbar-menu-item">
            <a href="#">
              <Icon icon="prime:shopping-cart" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
