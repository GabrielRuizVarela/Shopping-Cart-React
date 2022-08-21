import React, { useContext } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Context from './context/Context';

function Navbar() {
  const { logo } = useContext(Context);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-menu-item">
            <Link to="/shop">Shop</Link>
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
