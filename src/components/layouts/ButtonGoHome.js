`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../styles/button.css';

export default function ButtonGoBack() {
  const history = useHistory();
  const onButtonBack = () => history.push(`/`);

  return (
    <div className='button_container'>
      <button className='button button__style' onClick={onButtonBack}>
        Go Home
      </button>
    </div>
  );
}
