`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/layouts/Header';
import AuthPage from '../components/layouts/AuthPage';
import BigPhotoPage from '../components/layouts/BigPhotoPage';
import DisplayPhotoList from '../components/DisplayPhotoList';

import {
  addPhotoAction,
  likePhotoAction,
  unLikePhotoAction,
} from '../actions/photoActions';

import {
  loginAction,
  logoutAction,
  getAuthUserAction,
  getLikesUserdAction,
} from '../actions/authActions';

import '../styles/app.css';

export default function App({
  photoList,
  auth,
  addPhotoAction,
  likePhotoAction,
  unLikePhotoAction,
  loginAction,
  logoutAction,
  getAuthUserAction,
  getLikesUserdAction,
}) {
  return (
    <div>
      <Header auth={auth} logoutAction={logoutAction} />
      <Switch>
        <Route exact path='/'>
          <DisplayPhotoList
            photoList={photoList}
            addPhotoAction={addPhotoAction}
          />
        </Route>
        <Route
          path='/bigPhoto/:id'
          render={(props) => (
            <BigPhotoPage
              {...props}
              photoList={photoList}
              likePhotoAction={likePhotoAction}
              unLikePhotoAction={unLikePhotoAction}
            />
          )}
        />
        <Route
          path='/authPage'
          render={(props) => (
            <AuthPage
              {...props}
              auth={auth}
              loginAction={loginAction}
              getAuthUserAction={getAuthUserAction}
              getLikesUserdAction={getLikesUserdAction}
            />
          )}
        />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ photoState, authState }) => {
  return {
    photoList: photoState,
    auth: authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhotoAction: () => dispatch(addPhotoAction()),
    likePhotoAction: (id) => dispatch(likePhotoAction(id)),
    unLikePhotoAction: (id) => dispatch(unLikePhotoAction(id)),
    loginAction: () => dispatch(loginAction()),
    logoutAction: () => dispatch(logoutAction()),
    getAuthUserAction: () => dispatch(getAuthUserAction()),
    getLikesUserdAction: () => dispatch(getLikesUserdAction()),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
