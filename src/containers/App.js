`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../styles/app.css';
import Header from '../components/Header';
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import PhotoFullSizePage from '../pages/PhotoFullSizePage';
import { addPostPhoto } from '../actions/actions';

export default function App({ postPhoto, addPostPhoto }) {
  document.addEventListener(`scroll`, () => console.log(`scroll!`));

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <DisplayListPostPhoto
            postPhoto={postPhoto}
            addPostPhoto={addPostPhoto}
          />
        </Route>
        <Route path='/photoFullSize/:id' component={PhotoFullSizePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    postPhoto: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPostPhoto: () => dispatch(addPostPhoto()),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
