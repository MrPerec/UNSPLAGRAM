`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/layouts/Header';
import AuthPage from '../components/layouts/AuthPage';
import BigPhotoPage from '../components/layouts/BigPhotoPage';
import DisplayPhotoList from '../components/DisplayPhotoList';

import {
  addNoAuthPhotoAction,
  addAuthPhotoAction,
  likePhotoAction,
  removeLikePhotoAction,
} from '../actions/photoActions';
import {
  loginAction,
  logoutAction,
  getAuthUserAction,
} from '../actions/authActions';

import '../styles/app.css';

export default function App({
  photoList,
  auth,
  addNoAuthPhotoAction,
  addAuthPhotoAction,
  likePhotoAction,
  removeLikePhotoAction,
  loginAction,
  logoutAction,
  getAuthUserAction,
}) {
  return (
    <div>
      <Header auth={auth} logoutAction={logoutAction} />
      <Switch>
        <Route exact path='/'>
          <DisplayPhotoList
            auth={auth}
            photoList={photoList}
            addNoAuthPhotoAction={addNoAuthPhotoAction}
            addAuthPhotoAction={addAuthPhotoAction}
          />
        </Route>
        <Route
          path='/bigPhoto/:id'
          render={(props) => (
            <BigPhotoPage
              {...props}
              auth={auth}
              photoList={photoList}
              likePhotoAction={likePhotoAction}
              removeLikePhotoAction={removeLikePhotoAction}
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
    addNoAuthPhotoAction: () => dispatch(addNoAuthPhotoAction()),
    addAuthPhotoAction: () => dispatch(addAuthPhotoAction()),
    likePhotoAction: (id) => dispatch(likePhotoAction(id)),
    removeLikePhotoAction: (id) => dispatch(removeLikePhotoAction(id)),
    loginAction: () => dispatch(loginAction()),
    logoutAction: () => dispatch(logoutAction()),
    getAuthUserAction: () => dispatch(getAuthUserAction()),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
