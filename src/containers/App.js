`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import PhotosPostsList from '../components/PhotosPostsList.js';
import {addPostPhoto} from '../actions/actions';

export default function App({photoPost, addPostPhoto}){
	// console.log(`It is App.js`);
	// console.log(photoPost);
	// console.log(addPostPhoto);

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