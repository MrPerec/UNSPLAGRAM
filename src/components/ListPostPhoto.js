`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import DisplayPostPhoto from './DisplayPostPhoto.js';
import AddPostPhoto from './AddPostPhoto.js';
import '../styles/postList.css';

export default function ListPostPhoto({postPhoto, addPostPhoto}){
	// console.log(`It is the component ListPostPhoto`);
	// console.log(postPhoto);
	// console.log(addPostPhoto);
	
	const listOfPhotosPosts = postPhoto.map( (obj) => {
		let keysContents = ``;
		for (const key in obj) keysContents += obj[key];
		if (keysContents !== ``){
			const {id, urlsSmall, alt_description, userName, userLinksHtml, created_at, likes} = obj;
			const postOfPhoto = { 
				urlsSmall,
				alt_description,
				userName,
				userLinksHtml,
				created_at,
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
		<div>
			<div className='post_list_container'>
				{listOfPhotosPosts}
			</div>
			<AddPostPhoto
				addPostPhoto={addPostPhoto}
			/>
		</div>
	)
}

ListPostPhoto.propTypes = {
	postPhoto: PropTypes.array.isRequired,
	addPostPhoto: PropTypes.func.isRequired
}