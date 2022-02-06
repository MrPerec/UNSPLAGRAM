`use strict`;

import React from 'react';
import { ZERO, VERTICAL_OFFSET } from '../../constants/constants.js';
import '../../styles/button.css';

export default function ButtonUp() {
  const onUp = () => {
    if (window.pageYOffset > ZERO) {
      window.scrollBy(ZERO, VERTICAL_OFFSET);
      setTimeout(onUp, ZERO);
    }
  };

  return (
    <div className='button'>
      <button
        className='button__up button__up_style button_decor'
        onClick={onUp}
      >
        <i className='flaticon-up-arrow'></i>
      </button>
    </div>
  );
}
