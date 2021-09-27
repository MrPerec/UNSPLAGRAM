`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

import '../styles/postList.css';
import { INITIAL_STATE_LENGTH } from '../constants/constants.js';
import DisplayPostPhoto from './DisplayPostPhoto.js';
import ButtonBackTop from '../components/layouts/ButtonBackTop';

export default function DisplayListPostPhoto({
  listPostPhotos,
  addPostPhoto,
  likePostPhoto,
}) {
  // console.log(`It's the DisplayListPostPhoto`);
  // console.log(listPostPhotos);

  const getFirstlistOfPostsPhotos = () => {
    if (listPostPhotos.length === INITIAL_STATE_LENGTH) addPostPhoto();
  };

  const displayListPostPhoto = listPostPhotos.map((postOfPhoto) => {
    let keysContents = ``;
    for (const key in postOfPhoto) keysContents += postOfPhoto[key];
    if (keysContents !== ``) {
      const { id } = postOfPhoto;
      return (
        <DisplayPostPhoto
          key={id}
          postOfPhoto={postOfPhoto}
          likePostPhoto={likePostPhoto}
        />
      );
    }
  });

  getFirstlistOfPostsPhotos();

  return (
    <InfiniteScroll
      dataLength={listPostPhotos.length}
      next={addPostPhoto}
      hasMore={true}
      loader={<h4 className='post_list_container'>Loading...</h4>}
    >
      <div className='post_list_container'>{displayListPostPhoto}</div>
      <ButtonBackTop />
    </InfiniteScroll>
  );
}

DisplayListPostPhoto.propTypes = {
  listPostPhotos: PropTypes.array.isRequired,
  addPostPhoto: PropTypes.func.isRequired,
};
