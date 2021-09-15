`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import PhotoFullSizePage from '../pages/PhotoFullSizePage';
import '../styles/post.css';
import '../styles/fonts/iconfont/flaticon.css';

export default function DisplayPostPhoto({postOfPhoto}){
	const { urlsSmall, altDescription, userName, userLinksHtml, createdAt, likes} = postOfPhoto;
	
	return (
		<Router>
			<div className='post_container'>
				<Link to='/photoFullSize'>
					<img 
						className='image'
						src={urlsSmall}
						alt={altDescription}
						title={altDescription}
					/>
				</Link>
				<div className='post_text_container'>
					<div className='post_name_piblish_container'>
						<a href={userLinksHtml} target='_blank'	rel='noopener noreferrer' className="user_link">{userName}</a>
						<time dateTime={createdAt} className="publish_style">Published on {createdAt} </time>
					</div>
					<div className='like_container'>
						<i className='flaticon-heart flaticon_style flaticon-heart_style'></i>
						{/* <i className='flaticon-like flaticon_style flaticon-like_style'></i> */}
						{likes}
					</div> 
				</div>
			</div>
			{/* <Switch>
				<Route path='/photoFullSize'>
					<PhotoFullSizePage />
				</Route>
			</Switch> */}
		</Router>
	);
}

DisplayPostPhoto.propTypes = {
	postOfPhoto: PropTypes.object.isRequired
}