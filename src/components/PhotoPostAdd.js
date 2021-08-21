`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/button.css';

export default function PhotoPostAdd({addPostPhoto}){
	/*console.log(`It is the component PhotoPostDisplay`);
	console.log(postOfPhoto);*/
	
	const onButtonClick = () => addPostPhoto();
	
	return (
		<div className='button_container'>
 			<button className='button' onClick={onButtonClick}>Загрузить еще</button>
		</div>
	);
}

PhotoPostAdd.propTypes = {
	addPostPhoto: PropTypes.func.isRequired,
}