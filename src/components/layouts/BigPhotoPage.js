`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoBack from './ButtonGoBack';
import '../../styles/post.css';
import '../../styles/fonts/iconfont/flaticon.css';

export default function BigPhotoPage({
  auth,
  photoList,
  likePhotoAction,
  unLikePhotoAction,
  match,
}) {
  const currentPhotoId = match.params.id;

  const bigPhoto = photoList.map((photo) => {
    if (photo.id === currentPhotoId) {
      const {
        urlsRegular,
        altDescription,
        userName,
        userLinksHtml,
        createdAt,
        likes,
        likedByUser,
      } = photo;

      const { login } = auth;

      const onLike = likedByUser
        ? () => unLikePhotoAction(currentPhotoId)
        : () => likePhotoAction(currentPhotoId);

      const like = likedByUser
        ? 'flaticon-like flaticon_style flaticon_style_cursor flaticon-like_style'
        : 'flaticon-heart flaticon_style flaticon_style_cursor';

      const likeDisplay = !login ? (
        <i className='flaticon-heart flaticon_style'></i>
      ) : (
        <i className={like} onClick={onLike}></i>
      );

      return (
        <div className='post_full-size_container' key={currentPhotoId}>
          <div className='post_container'>
            <img
              className='image image-full-size'
              src={urlsRegular}
              alt={altDescription}
              title={altDescription}
            />
            <div className='post_text_container'>
              <div className='post_name_piblish_container'>
                <a
                  href={userLinksHtml}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='user_link'
                >
                  {userName}
                </a>
                <time dateTime={createdAt} className='publish_style'>
                  Published on {createdAt}
                </time>
              </div>
              <div className='like_container'>
                {likeDisplay}
                {likes}
              </div>
            </div>
          </div>
          <ButtonGoBack />
        </div>
      );
    }
  });

  return <div>{bigPhoto};</div>;
}

BigPhotoPage.propTypes = {
  photoList: PropTypes.array.isRequired,
  likePhotoAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
