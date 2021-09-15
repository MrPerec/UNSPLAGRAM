`use strict`;

import React from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'; 

import PhotoFullSizePage from '../pages/PhotoFullSizePage';
import '../styles/app.css'
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import {addPostPhoto} from '../actions/actions';

export default function App( {postPhoto, addPostPhoto} ){
	// document.addEventListener(`click`, () => console.log(`click!`))

	return(
		<Router>
			<div>
				<header className="header header__container gray__block">
					<h3 className="h3 header_h3__text-style">
						UNSPLAGRAM
					</h3>
				</header>
				<DisplayListPostPhoto
					postPhoto={postPhoto}
					addPostPhoto={addPostPhoto}
				/>
				<Switch>
					<Route path='/photoFullSize'>
						<PhotoFullSizePage />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}

const mapStateToProps = (state) => {
	return {
		postPhoto: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		addPostPhoto: () => dispatch( addPostPhoto() )
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);