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

  const likeClass = likedByUser
    ? 'flaticon-like flaticon-like_font_18 flaticon-like_cursor flaticon-like_color_red'
    : 'flaticon-heart flaticon-like_font_18 flaticon-like_cursor';

  const likeDisplay = !login ? (
    <i className='flaticon-heart flaticon-like_font_18'></i>
  ) : (
    <i className={likeClass} onClick={onLike}></i>
  );

  return (
    <article className='post post_container'>
      <Link to={{ pathname: `/bigPhoto/${id}` }}>
        <img src={urlsSmall} alt={altDescription} title={altDescription} />
      </Link>
      <div className='post__text post__text_container'>
        <div className='post__piblish'>
          <a
            href={userLinksHtml}
            target='_blank'
            rel='noopener noreferrer'
            className='post__link post__link_text'
          >
            {userName}
          </a>
          <time dateTime={createdAt} className='post__date post__date_text'>
            Published on {createdAt}
          </time>
        </div>
        <div className='flex-container flex-container_padding'>
          {likeDisplay}
          <span className='post__like-text post__like-text_size'>{likes}</span>
        </div>
      </div>
    </article>
  );
}

DisplayPhoto.propTypes = {
  photo: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  likePhotoAction: PropTypes.func.isRequired,
  removeLikePhotoAction: PropTypes.func.isRequired,
};
