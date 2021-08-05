`use strict`;

import React from 'react';
import PhotoPostDisplay from '../components/PhotoPostDisplay.js';
import PhotoPostAdd from '../components/PhotoPostAdd.js';

export default function PhotosPostsList({photoPost, addPostPhoto}){
	// console.log(`It is the component PhotosPostsList`);
	// console.log(photoPost);
	// console.log(addPostPhoto);

	/* window.addEventListener('scroll', function(){
		let scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight, 
			document.body.offsetHeight,	document.documentElement.offsetHeight, 
			document.body.clientHeight, document.documentElement.clientHeight
		);
		return console.log(scrollHeight - innerHeight === pageYOffset);
	}); */
	
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
		<div>
			{listOfPhotosPosts}
			<PhotoPostAdd
				addPostPhoto={addPostPhoto}
			/>
		</div>
	)
}