`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/layouts/Header';
import CallBackPage from '../components/layouts/CallBackPage';
import BigPhotoPage from '../components/layouts/BigPhotoPage';
import DisplayPhotoList from '../components/DisplayPhotoList';

import { addPhotoAction, likePhotoAction } from '../actions/photoActions';
import { loginAction } from '../actions/loginAction';

import '../styles/app.css';

export default function App({
  photoList,
  auth,
  addPhotoAction,
  likePhotoAction,
  loginAction,
}) {
  return (
    <div>
      <Header auth={auth} />
      <Switch>
        <Route exact path='/'>
          <DisplayPhotoList
            photoList={photoList}
            addPhotoAction={addPhotoAction}
            likePhotoAction={likePhotoAction}
          />
        </Route>
        <Route
          path='/bigPhoto/:id'
          render={(props) => (
            <BigPhotoPage
              {...props}
              photoList={photoList}
              likePhotoAction={likePhotoAction}
            />
          )}
        />
        <Route
          path='/callBack'
          render={(props) => (
            <CallBackPage {...props} auth={auth} loginAction={loginAction} />
          )}
        />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ photoState, loginState }) => {
  return {
    photoList: photoState,
    auth: loginState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPhotoAction: () => dispatch(addPhotoAction()),
    likePhotoAction: (id) => dispatch(likePhotoAction(id)),
    loginAction: () => dispatch(loginAction()),
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
