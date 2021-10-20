`use strict`;

import React from 'react';
import '../../styles/header.css';
import ButtonSignIn from './ButtonSignIn';

export default function Header() {
  return (
    <header className='header header__container gray__block'>
      <ButtonSignIn />
      <h3 className='h3 header_h3__text-style'>UNSPLAGRAM</h3>
    </header>
  );
}
