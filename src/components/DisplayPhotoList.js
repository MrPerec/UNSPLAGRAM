`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import DisplayPhoto from './DisplayPhoto';
import ButtonUp from './layouts/ButtonUp';
import { INITIAL_LENGTH_STATE_LIST } from '../constants/constants.js';
import removeDuplicates from '../utils/removeDuplicates';
import getUuid from '../utils/getUuid';

export default function DisplayPhotoList({
  auth,
  photoList,
  addNoAuthPhotoAction,
  addAuthPhotoAction,
  likePhotoAction,
  removeLikePhotoAction,
}) {
  const { login } = auth;
  const addPhoto = () =>
    !login ? addNoAuthPhotoAction() : addAuthPhotoAction();

  if (photoList.length <= INITIAL_LENGTH_STATE_LIST) addPhoto();

  const displayPhotoList = removeDuplicates(photoList).map((photo) => {
    const uuid = getUuid();
    return (
      <DisplayPhoto
        key={uuid}
        photo={photo}
        auth={auth}
        likePhotoAction={likePhotoAction}
        removeLikePhotoAction={removeLikePhotoAction}
      />
    );
  });

  return (
    <InfiniteScroll
      dataLength={photoList.length}
      next={addPhoto}
      hasMore={true}
    >
      <main className='main'>
        <div className='fixed__container fixed__container_size'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 478: 1, 840: 2, 1240: 3, 1640: 4 }}
          >
            <Masonry>{displayPhotoList}</Masonry>
            <ButtonUp />
          </ResponsiveMasonry>
        </div>
      </main>
    </InfiniteScroll>
  );
}

DisplayPhotoList.propTypes = {
  auth: PropTypes.object.isRequired,
  photoList: PropTypes.array.isRequired,
  addNoAuthPhotoAction: PropTypes.func.isRequired,
  addAuthPhotoAction: PropTypes.func.isRequired,
  likePhotoAction: PropTypes.func.isRequired,
  removeLikePhotoAction: PropTypes.func.isRequired,
};
