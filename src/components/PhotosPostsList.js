`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import PhotoPostDisplay from '../components/PhotoPostDisplay.js';
import PhotoPostAdd from '../components/PhotoPostAdd.js';
import '../styles/button.css';

export default function PhotosPostsList({photoPost, addPostPhoto}){
	// console.log(`It is the component PhotosPostsList`);
	// console.log(photoPost);
	// console.log(addPostPhoto);
	
	const listOfPhotosPosts = photoPost.map( (obj) => {
		let keysContents = ``;
		for (const key in obj) keysContents += obj[key];
		if (keysContents !== ``){
			const {
				id, 
				urlsThumb, 
				alt_description, 
				userName, 
				userLinksHtml, 
				created_at, 
				likes
			} = obj;
			const postOfPhoto = { 
				urlsThumb,
				alt_description,
				userName,
				userLinksHtml,
				created_at,
				likes
			};
			return(
				<PhotoPostDisplay
					key={id}
					postOfPhoto={postOfPhoto}
				/>
			)
		}
	})
	return(
		<div className='post_list_container'>
			{listOfPhotosPosts}
			<PhotoPostAdd
				addPostPhoto={addPostPhoto}
			/>
		</div>
	)
}

PhotosPostsList.propTypes = {
	photoPost: PropTypes.array.isRequired,
	addPostPhoto: PropTypes.func.isRequired
}