`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoBack from './ButtonGoBack';
import '../../styles/post.css';
import '../../styles/fonts/iconfont/flaticon.css';

export default function BigPhotoPage({ photoList, likePhotoAction, match }) {
  const currentPostId = match.params.id;
  const onLike = () => likePhotoAction(currentPostId);

  const bigPhoto = photoList.map((photo) => {
    if (photo.id === currentPostId) {
      const {
        urlsRegular,
        altDescription,
        userName,
        userLinksHtml,
        createdAt,
        likes,
        likedByUser,
      } = photo;

      const like = likedByUser
        ? 'flaticon-like flaticon_style flaticon_style_cursor flaticon-like_style'
        : 'flaticon-heart flaticon_style flaticon_style_cursor';

      return (
        <div className='post_full-size_container' key={currentPostId}>
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
                <i className={like} onClick={onLike}></i>
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
