`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import ListPostPhoto from '../components/ListPostPhoto.js';
import {addPostPhoto} from '../actions/actions';

export default function App({postPhoto, addPostPhoto}){
	// console.log(`It is App.js`);
	// console.log(postPhoto);
	// console.log(addPostPhoto);

	return(
		<div>
			<ListPostPhoto
				postPhoto={postPhoto}
				addPostPhoto={addPostPhoto}
			/>		
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		postPhoto: state
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