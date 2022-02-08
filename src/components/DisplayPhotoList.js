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
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 320: 1, 820: 2, 1220: 3, 1620: 4 }}
      >
        <main className='main'>
          <div className='fixed__container fixed__container_size'>
            <Masonry>{displayPhotoList}</Masonry>
            <ButtonUp />
          </div>
        </main>
      </ResponsiveMasonry>
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
