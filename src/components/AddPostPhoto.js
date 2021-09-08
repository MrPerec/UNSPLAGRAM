`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

export default function AddPostPhoto({addPostPhoto}){	
	const onButtonClick = () => addPostPhoto();
	
	return (
		<div className='button_container'>
 			<button className='button button__style' onClick={onButtonClick}>Show more</button>
		</div>
	);
}

AddPostPhoto.propTypes = {
	addPostPhoto: PropTypes.func.isRequired,
}