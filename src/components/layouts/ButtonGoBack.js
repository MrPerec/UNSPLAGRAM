`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/button.css';

export default function ButtonGoBack() {
  const history = useHistory();
  const onButtonBack = () => history.goBack();

  return (
    <div className='button button_margin-top_10'>
      <button
        className='button__back button__back_style button_decor'
        onClick={onButtonBack}
      >
        Go Back
      </button>
    </div>
  );
}
