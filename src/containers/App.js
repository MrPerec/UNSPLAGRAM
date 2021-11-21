`use strict`;

import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../components/layouts/Header';
// import LoginPage from '../components/layouts/LoginPage.test';
import CallBackPage from '../components/layouts/CallBackPage';
import BigPhotoPage from '../components/layouts/BigPhotoPage';
import DisplayPhotoList from '../components/DisplayPhotoList';

// import addPhotoAction from '../actions/addPhotoAction.test';
// import likePhotoAction from '../actions/likePhotoAction.test';
import { addPhotoAction, likePhotoAction } from '../actions/photoActions';

import loginAction from '../actions/loginAction';

import '../styles/app.css';

export default function App({
  photoList,
  addPhotoAction,
  likePhotoAction,
  loginAction,
}) {
  return (
    <div>
      <Header loginAction={loginAction} />
      <Switch>
        {/* <Route
          path='/login'
          render={(props) => <LoginPage {...props} loginAction={loginAction} />}
        /> */}
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
            <CallBackPage {...props} loginAction={loginAction} />
          )}
        />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

/* const mapStateToProps = (state) => {
  return {
    photoList: state,
  };
}; */

const mapStateToProps = ({ photoReducers }) => {
  return {
    photoList: photoReducers,
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
