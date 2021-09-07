`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/button.css';

export default function AddPostPhoto({addPostPhoto}){
	/*console.log(`It is the component DisplayPostPhoto`);
	console.log(postOfPhoto);*/
	
	const onButtonClick = () => addPostPhoto();
	
	return (
		<div className='button_container'>
 			<button className='button_height' onClick={onButtonClick}>Show more</button>
		</div>
	);
}

AddPostPhoto.propTypes = {
	addPostPhoto: PropTypes.func.isRequired,
}