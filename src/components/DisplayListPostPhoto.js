`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import DisplayPostPhoto from './DisplayPostPhoto.js';
import AddPostPhoto from './AddPostPhoto.js';
import '../styles/postList.css';

export default function DisplayListPostPhoto({postPhoto, addPostPhoto}){
	
	const listOfPhotosPosts = postPhoto.map( (obj) => {
		let keysContents = ``;
		for (const key in obj) keysContents += obj[key];
		if (keysContents !== ``){
			const {id, urlsSmall, altDescriptionPostPhoto, userNamePostPhoto, userLinksHtml, createdAt, likes} = obj;
			const postOfPhoto = { 
				urlsSmall,
				altDescriptionPostPhoto,
				userNamePostPhoto,
				userLinksHtml,
				createdAt,
				likes
			};
			
			return(
				<DisplayPostPhoto
					key={id}
					postOfPhoto={postOfPhoto}
				/>
			)
		}
	})

	return(
		<main>
			<div className='post_list_container'>
				{listOfPhotosPosts}
			</div>
			<AddPostPhoto
				addPostPhoto={addPostPhoto}
			/>
		</main>
	)
}

DisplayListPostPhoto.propTypes = {
	postPhoto: PropTypes.array.isRequired,
	addPostPhoto: PropTypes.func.isRequired
}