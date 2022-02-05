`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/button.css';

export default function ButtonGoMain() {
  const history = useHistory();
  const buttonGoMain = () => history.push(`/`);

  return (
    <section className='section button_container'>
      <button className='button button__style' onClick={buttonGoMain}>
        Go back to the main page
      </button>
    </section>
  );
}
