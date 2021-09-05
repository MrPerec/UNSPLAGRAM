`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import PhotosPostsList from '../components/PhotosPostsList.js';
import {addPostPhoto} from '../actions/actions';

export default function App({photoPost, addPostPhoto}){
	// console.log(`It is App.js`);
	// console.log(photoPost);
	// console.log(addPostPhoto);

	// const onScrollPage = () => addPostPhoto();
	
	const addPostPhotoEndOfScrollPage = () =>{
    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight, 
        document.body.offsetHeight,	document.documentElement.offsetHeight, 
        document.body.clientHeight, document.documentElement.clientHeight
    );
    // if (scrollHeight - innerHeight === scrollY || scrollHeight - innerHeight === scrollY - SCROLL_HEIGHT) return store.dispatch( addPostPhoto() );
		if (scrollHeight - innerHeight === scrollY || scrollHeight - innerHeight === scrollY - SCROLL_HEIGHT) return addPostPhoto();
};

	return(
		<div>
			<PhotosPostsList
				photoPost={photoPost}
				addPostPhoto={addPostPhoto}
				// addPostPhotoEndOfScroll={addPostPhoto}
				onScroll={addPostPhotoEndOfScrollPage}
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