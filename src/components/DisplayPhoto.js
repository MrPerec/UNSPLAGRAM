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
    <article className='post post_padding-top_10'>
      <Link to={{ pathname: `/bigPhoto/${id}` }}>
        <img
          className='post__image'
          src={urlsSmall}
          alt={altDescription}
          title={altDescription}
        />
      </Link>
      <div className='post__publish post__publish_container'>
        <div className='flex-container flex-container_padding'>
          <div className='post__publish-author'>
            <a
              href={userLinksHtml}
              target='_blank'
              rel='noopener noreferrer'
              className='post_text post_text_style post_text_size_18'
            >
              {userName}
            </a>
            <time
              dateTime={createdAt}
              className='post_text post_text_style post_text_size_12'
            >
              Published on {createdAt}
            </time>
          </div>
          <div className='post_text post_text_style'>
            <div className='flex-container flex-container_padding'>
              {likeDisplay}
              <span className='post_text post_text_size_12 post_text_margin'>
                {likes}
              </span>
            </div>
          </div>
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
