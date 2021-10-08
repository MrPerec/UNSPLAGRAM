`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import '../styles/app.css';
import Header from '../components/layouts/Header';
import DisplayListPostPhoto from '../components/DisplayListPostPhoto.js';
import PhotoFullSizePage from '../components/pages/PhotoFullSizePage';
import addPostAction from '../actions/addPostAction';
import likePostAction from '../actions/likePostAction';

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
