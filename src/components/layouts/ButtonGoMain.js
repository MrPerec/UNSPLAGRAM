`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/button.css';

export default function ButtonGoMain() {
  const history = useHistory();
  const buttonGoMain = () => history.push(`/`);

  return (
    <div className='button button_margin-top_10'>
      <button
        className='button__back button__back_style button_decor'
        onClick={buttonGoMain}
      >
        Go back to the main page
      </button>
    </div>
  );
}
