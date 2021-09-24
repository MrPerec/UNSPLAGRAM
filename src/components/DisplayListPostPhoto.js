`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import DisplayPostPhoto from './DisplayPostPhoto.js';
import { INITIAL_STATE_LENGTH } from '../constants/constants.js';
import '../styles/postList.css';

export default function DisplayListPostPhoto({ postPhoto, addPostPhoto }) {
  const getFirstlistOfPhotosPosts = () => {
    if (postPhoto.length === INITIAL_STATE_LENGTH) addPostPhoto();
  };

  const listOfPhotosPosts = postPhoto.map((postOfPhoto) => {
    let keysContents = ``;
    for (const key in postOfPhoto) keysContents += postOfPhoto[key];
    if (keysContents !== ``) {
      const { id } = postOfPhoto;

      return <DisplayPostPhoto key={id} postOfPhoto={postOfPhoto} />;
    }
  });

  getFirstlistOfPhotosPosts();

  return (
    <InfiniteScroll
      dataLength={postPhoto.length}
      next={addPostPhoto}
      hasMore={true}
      loader={<h4 className='post_list_container'>Loading...</h4>}
    >
      <div className='post_list_container'>{listOfPhotosPosts}</div>
    </InfiniteScroll>
  );
}

DisplayListPostPhoto.propTypes = {
  postPhoto: PropTypes.array.isRequired,
  addPostPhoto: PropTypes.func.isRequired,
};
