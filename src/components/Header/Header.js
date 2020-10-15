import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {

  return (
    <header>
      <div className='left'>
        <h3>Food Nearby</h3>
      </div>
      <div className='right'>
        <NavLink to='/'><h2>snackMACK</h2></NavLink>
      </div>
    </header>
  );
};

export default Header;