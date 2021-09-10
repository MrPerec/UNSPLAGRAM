`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import DisplayPostPhoto from './DisplayPostPhoto.js';
import AddPostPhoto from './AddPostPhoto.js';
import '../styles/postList.css';
import {INITIAL_STATE_LENGTH} from '../constants/constants.js'

export default function DisplayListPostPhoto({postPhoto, addPostPhoto}){

	const getFirstlistOfPhotosPosts = () => {
		console.log(postPhoto.length);
		if (postPhoto.length === INITIAL_STATE_LENGTH ) addPostPhoto();
	};
	
	const listOfPhotosPosts = postPhoto.map( (obj) => {
		let keysContents = ``;
		for (const key in obj) keysContents += obj[key];
		if (keysContents !== ``){
			const {id, urlsSmall, altDescription, userName, userLinksHtml, createdAt, likes} = obj;
			const postOfPhoto = { 
				urlsSmall,
				altDescription,
				userName,
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
	});

	getFirstlistOfPhotosPosts();

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