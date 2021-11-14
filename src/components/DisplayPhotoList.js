`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import { INITIAL_STATE_LENGTH } from '../constants/constants.js';
import DisplayPhoto from './DisplayPhoto';
import ButtonUp from './layouts/ButtonUp';
import '../styles/postList.css';

export default function DisplayPhotoList({ photoList, addPhotoAction }) {
  const DisplayFirstPhotoList = () => {
    if (photoList.length === INITIAL_STATE_LENGTH) addPhotoAction();
  };

  const displayPhotoList = photoList.map((photo) => {
    let propContent = ``;
    for (const prop in photo) propContent += photo[prop];
    if (propContent !== ``) {
      const { uuid } = photo;
      // const { id } = photo;
      return (
        <DisplayPhoto
          key={uuid}
          // key={id}
          photo={photo}
        />
      );
    }
  });

  DisplayFirstPhotoList();

  return (
    <InfiniteScroll
      dataLength={photoList.length}
      next={addPhotoAction}
      hasMore={true}
      loader={<h4 className='post_list_container'>Loading...</h4>}
    >
      <div className='post_list_container'>{displayPhotoList}</div>
      <ButtonUp />
    </InfiniteScroll>
  );
}

DisplayPhotoList.propTypes = {
  photoList: PropTypes.array.isRequired,
  addPhotoAction: PropTypes.func.isRequired,
  likePhotoAction: PropTypes.func.isRequired,
};
