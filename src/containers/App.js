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
  // loginState,
  addPhotoAction,
  likePhotoAction,
  loginAction,
}) {
  // loginAction();
  return (
    <div>
      <Header />
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
            <CallBackPage
              {...props}
              // loginState={loginState}
              loginAction={loginAction}
            />
          )}
        />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ photoReducer, loginReducer }) => {
  // console.log(loginReducer);
  return {
    photoList: photoReducer,
    // loginState: loginReducer,
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
