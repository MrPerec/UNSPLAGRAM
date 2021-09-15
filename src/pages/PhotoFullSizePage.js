`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';
import '../styles/button.css';

export default function PhotoFullSizePage(){
	// const onButtonClick = () => addPostPhoto();
	const history = useHistory()

	return (
		<div className='button_container'>
				<h1>This is a full size photo</h1>
				<button className='button button__style' onClick={() => history.push('/')}>Back</button>
		</div>
	);
}

// AddPostPhoto.propTypes = {
// 	addPostPhoto: PropTypes.func.isRequired,
// }