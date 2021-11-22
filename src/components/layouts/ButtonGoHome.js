`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/button.css';

export default function ButtonGoHome() {
  const history = useHistory();
  const ButtonGoHome = () => history.push(`/`);

  return (
    <div className='button_container'>
      <button className='button button__style' onClick={ButtonGoHome}>
        Go Home
      </button>
    </div>
  );
}
