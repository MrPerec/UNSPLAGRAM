`use strict`;

import React from 'react';
import { ZERO, VERTICAL_OFFSET } from '../../constants/constants.js';
import '../../styles/button.css';
import '../../styles/buttonUp.css';

export default function ButtonUp() {
  const onUp = () => {
    if (window.pageYOffset > ZERO) {
      window.scrollBy(ZERO, VERTICAL_OFFSET);
      setTimeout(onUp, ZERO);
    }
  };

  return (
    <a className='button-up button-up__style' onClick={onUp}>
      <i className='flaticon-up-arrow'></i>
    </a>
  );
}
