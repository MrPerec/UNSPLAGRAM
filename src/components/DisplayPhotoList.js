`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import { INITIAL_STATE_LENGTH } from '../constants/constants.js';
import DisplayPhoto from './DisplayPhoto';
import ButtonUp from './layouts/ButtonUp';

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

  const DisplayFirstPhotoList = () => {
    if (photoList.length === INITIAL_STATE_LENGTH) addPhoto();
  };

  const displayPhotoList = photoList.map((photo) => {
    let propContent = ``;
    for (const prop in photo) propContent += photo[prop];
    if (propContent !== ``) {
      const { uuid } = photo;
      return (
        <DisplayPhoto
          key={uuid}
          photo={photo}
          auth={auth}
          likePhotoAction={likePhotoAction}
          removeLikePhotoAction={removeLikePhotoAction}
        />
      );
    }
  });

  DisplayFirstPhotoList();

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
