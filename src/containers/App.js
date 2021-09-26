`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../styles/app.css';
import Header from '../components/layouts/Header';
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import PhotoFullSizePage from '../components/pages/PhotoFullSizePage';
import addPostPhoto from '../actions/addPostPhoto';
import likePostPhoto from '../actions/likePostPhoto';

const mapStateToProps = (state) => {
  return {
    listPostPhotos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPostPhoto: () => dispatch(addPostPhoto()),
    likePostPhoto: (id) => dispatch(likePostPhoto(id)),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default function App({ listPostPhotos, addPostPhoto, likePostPhoto }) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <DisplayListPostPhoto
            listPostPhotos={listPostPhotos}
            addPostPhoto={addPostPhoto}
            likePostPhoto={likePostPhoto}
          />
        </Route>
        <Route path='/photoFullSize/:id' component={PhotoFullSizePage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}
