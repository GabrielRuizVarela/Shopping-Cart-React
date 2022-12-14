import React, { useContext } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Context from './context/Context';
import '../styles/Navbar.scss';

function Navbar() {
  const { logo } = useContext(Context);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Search" />
          <Icon icon="fe:search" />
        </div>
        <span />
        <div className="navbar-menu-item">
          <Link to="/">Home</Link>
        </div>
        <div className="navbar-menu-item">
          <Link to="/shop">Shop</Link>
        </div>
        <div className="navbar-menu-item shop-icon">
          <Link to="/">
            <Icon icon="prime:shopping-cart" className="shop-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
