`use strict`;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/header.css';
import '../../styles/buttonLogin.css';

export default function Header() {
  return (
    <header className='header header__container gray__block'>
      <NavLink to='/login'>
        <button className='button-sign-in button-sign-in__style'>Login</button>
      </NavLink>
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
