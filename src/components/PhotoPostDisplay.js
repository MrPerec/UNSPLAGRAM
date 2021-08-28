`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/post.css';
import '../styles/fonts/iconfont/flaticon.css';

export default function PhotoPostDisplay({postOfPhoto}){
	// console.log(`It is the component PhotoPostDisplay`);
	// console.log(postOfPhoto);
	const {
		urlsSmall, 
		alt_description, 
		userName, 
		userLinksHtml, 
		created_at, 
		likes
	} = postOfPhoto;
	
	return (
		<div className='post_container'>
			<img 
				className='image'
				src={urlsSmall}
				alt={alt_description}
				title={alt_description}
			/>
			<div className='post_text_container'>
				<div className='post_name_piblish_container'>
					<a href={userLinksHtml} target='_blank'	rel='noopener noreferrer' className="user_link">{userName}</a>
					<time dateTime={created_at} className="publish_style">Published on {created_at} </time>
				</div>
				<div className='like_container'>
					<i className='flaticon-heart flaticon_style flaticon-heart_style'></i>
					{/* <i className='flaticon-like flaticon_style flaticon-like_style'></i> */}
					{likes}
				</div> 
			</div>
		</div>
	);
}

PhotoPostDisplay.propTypes = {
	postOfPhoto: PropTypes.object.isRequired
}