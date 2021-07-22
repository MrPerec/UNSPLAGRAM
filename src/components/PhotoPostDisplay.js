`use strict`;

import React from 'react';
import '../styles/post.css';
import '../styles/icofont-heart.min.css';

export default function PhotoPostDisplay({postOfPhoto}){
	// console.log(`It is the component PhotoPostDisplay`);
	// console.log(postOfPhoto);
	const {urlsSmall, alt_description, userName, userLinksHtml, created_at, likes} = postOfPhoto;
	
	return (
		<div className='post_container'>
			{/*<a 
				href={userLinksHtml} 
				target='_blank' 
				rel='noopener noreferrer'
			>
				<img 
					src={urlsSmall}
					alt={alt_description}
					title={alt_description}
				/>
			</a>*/}
			<img 
				src={urlsSmall}
				alt={alt_description}
				title={alt_description}
			/>
			{/*<div>{userName}</div>*/}
			<a href={userLinksHtml} target='_blank'	rel='noopener noreferrer'>{userName}</a>
			<div>
				<time dateTime={created_at}>Published on {created_at} </time>
			</div>
			<div className='icofont-heart'> {likes}</div> 
		</div>
	);
}