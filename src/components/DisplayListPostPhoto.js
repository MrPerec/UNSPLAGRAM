`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import DisplayPostPhoto from './DisplayPostPhoto.js';
import '../styles/postList.css';
import { INITIAL_STATE_LENGTH } from '../constants/constants.js';

export default function DisplayListPostPhoto({ postPhoto, addPostPhoto }) {
  const getFirstlistOfPhotosPosts = () => {
    if (postPhoto.length === INITIAL_STATE_LENGTH) addPostPhoto();
  };

  const listOfPhotosPosts = postPhoto.map((post) => {
    let keysContents = ``;
    for (const key in post) keysContents += post[key];
    if (keysContents !== ``) {
      const {
        id,
        urlsRegular,
        urlsSmall,
        altDescription,
        userName,
        userLinksHtml,
        createdAt,
        likes,
      } = post;
      const postOfPhoto = {
        id,
        urlsRegular,
        urlsSmall,
        altDescription,
        userName,
        userLinksHtml,
        createdAt,
        likes,
      };

      // return <DisplayPostPhoto key={id} postOfPhoto={postOfPhoto} />;
      return (
        <InfiniteScroll
          dataLength={postPhoto.length}
          next={addPostPhoto}
          hasMore={true}
          // loader={<h4>Loading...</h4>}
        >
          <DisplayPostPhoto key={id} postOfPhoto={postOfPhoto} />
        </InfiniteScroll>
      );
    }
  });

  getFirstlistOfPhotosPosts();

  return (
    <div className='post_list_container'>{listOfPhotosPosts}</div>

    // <div>
    //   <div className='post_list_container'>{listOfPhotosPosts}</div>
    //   <h4 className='post_list_container'>Loading...</h4>
    // </div>
  );
}

DisplayListPostPhoto.propTypes = {
  postPhoto: PropTypes.array.isRequired,
  addPostPhoto: PropTypes.func.isRequired,
};
