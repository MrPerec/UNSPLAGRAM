`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import PhotosPostsList from '../components/PhotosPostsList.js';
import {addPostPhoto} from '../actions';

export default function App({photoPost, addPostPhoto}){
	// console.log(`It is App.js`);
	// console.log(photoPost);
	// console.log(addPostPhoto);

	window.addEventListener('scroll', function(){
		let scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight, 
			document.body.offsetHeight,	document.documentElement.offsetHeight, 
			document.body.clientHeight, document.documentElement.clientHeight
		);
		return console.log(scrollHeight - innerHeight === pageYOffset);
		// dispatch( addPostPhoto() )
	});
	// console.log( `${populate()} px` );

	return(
		<div>
			<PhotosPostsList
				photoPost={photoPost}
				addPostPhoto={addPostPhoto}
			/>		
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		photoPost: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addPostPhoto: (props) => dispatch( addPostPhoto(props) )
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);