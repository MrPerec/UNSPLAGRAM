`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/button.css';

export default function ButtonGoHome() {
  const history = useHistory();
  const buttonGoHome = () => history.push(`/`);

  return (
    <div className='button_container'>
      <button className='button button__style' onClick={buttonGoHome}>
        Back to home
      </button>
    </div>
  );
}
