`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { INITIAL_STATE_LENGTH } from '../constants/constants.js';
import DisplayPhoto from './DisplayPhoto';
import ButtonUp from './layouts/ButtonUp';
import '../styles/postList.css';

export default function DisplayPhotoList({
  auth,
  photoList,
  addNoAuthPhotoAction,
  addAuthPhotoAction,
}) {
  const { login } = auth;
  const addPhoto = () =>
    !login ? addNoAuthPhotoAction() : addAuthPhotoAction();

  const DisplayFirstPhotoList = () => {
    if (photoList.length === INITIAL_STATE_LENGTH) addPhoto();
  };

  const displayPhotoList = photoList.map((photo) => {
    let propContent = ``;
    for (const prop in photo) propContent += photo[prop];
    if (propContent !== ``) {
      const { uuid } = photo;
      return <DisplayPhoto key={uuid} photo={photo} />;
    }
  });

  DisplayFirstPhotoList();

  return (
    <InfiniteScroll
      dataLength={photoList.length}
      next={addPhoto}
      hasMore={true}
    >
      <div className='post_list_container'>{displayPhotoList}</div>
      <ButtonUp />
    </InfiniteScroll>
  );
}

DisplayPhotoList.propTypes = {
  auth: PropTypes.object.isRequired,
  photoList: PropTypes.array.isRequired,
  addNoAuthPhotoAction: PropTypes.func.isRequired,
  addAuthPhotoAction: PropTypes.func.isRequired,
};
