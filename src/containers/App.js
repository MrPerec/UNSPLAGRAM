`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/layouts/Header';
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import LoginPage from '../components/layouts/LoginPage';
import PhotoFullSizePage from '../components/layouts/PhotoFullSizePage';

import addPostAction from '../actions/addPostAction';
import likePostAction from '../actions/likePostAction';

import '../styles/app.css';

export default function App({ listPostPhotos, addPostAction, likePostAction }) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/'>
          <DisplayListPostPhoto
            listPostPhotos={listPostPhotos}
            addPostAction={addPostAction}
            likePostAction={likePostAction}
          />
        </Route>
        <Route
          path='/photoFullSize/:id'
          render={(props) => (
            <PhotoFullSizePage
              {...props}
              listPostPhotos={listPostPhotos}
              likePostAction={likePostAction}
            />
          )}
        />
        <Route path='/login' component={LoginPage} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listPostPhotos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPostAction: () => dispatch(addPostAction()),
    likePostAction: (id) => dispatch(likePostAction(id)),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
