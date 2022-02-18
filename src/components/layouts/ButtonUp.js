`use strict`;

import React from 'react';
import {
  INITIAL_VERTICAL_POSITION,
  VERTICAL_OFFSET,
  TIMER_FAST,
} from '../../constants/constants.js';
import '../../styles/button.css';

export default function ButtonUp() {
  const onUp = () => {
    if (window.pageYOffset > INITIAL_VERTICAL_POSITION) {
      window.scrollBy(INITIAL_VERTICAL_POSITION, VERTICAL_OFFSET);
      setTimeout(onUp, TIMER_FAST);
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
