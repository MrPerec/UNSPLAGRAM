`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/post.css';
import '../styles/fonts/iconfont/flaticon.css';

export default function DisplayPhoto({
  photo,
  auth,
  likePhotoAction,
  removeLikePhotoAction,
}) {
  const {
    id,
    urlsSmall,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
    likedByUser,
  } = photo;

  const { login } = auth;

  const onLike = likedByUser
    ? () => removeLikePhotoAction(id)
    : () => likePhotoAction(id);

  const like = likedByUser
    ? 'flaticon-like flaticon_style flaticon_style_cursor flaticon-like_style'
    : 'flaticon-heart flaticon_style flaticon_style_cursor';

  const likeDisplay = !login ? (
    <i className='flaticon-heart flaticon_style'></i>
  ) : (
    <i className={like} onClick={onLike}></i>
  );

  return (
    <div className='post_container'>
      <Link to={{ pathname: `/bigPhoto/${id}` }}>
        <img
          className='image'
          src={urlsSmall}
          alt={altDescription}
          title={altDescription}
        />
      </Link>
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
  );
}

DisplayPhoto.propTypes = {
  photo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  likePhotoAction: PropTypes.func.isRequired,
  removeLikePhotoAction: PropTypes.func.isRequired,
};
