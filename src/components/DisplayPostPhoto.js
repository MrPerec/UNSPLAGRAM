`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/post.css';
import '../styles/fonts/iconfont/flaticon.css';

export default function DisplayPostPhoto({ postOfPhoto }) {
  const {
    id,
    urlsRegular,
    urlsSmall,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
  } = postOfPhoto;

  return (
    <div className='post_container'>
      <Link
        to={{
          pathname: `/photoFullSize/${id}`,
          id,
          urlsRegular,
          altDescription,
          userName,
          userLinksHtml,
          createdAt,
          likes,
        }}
      >
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
            Published on {createdAt}{' '}
          </time>
        </div>
        <div className='like_container'>
          <i className='flaticon-heart flaticon_style flaticon-heart_style'></i>
          {likes}
        </div>
      </div>
    </div>
  );
}

DisplayPostPhoto.propTypes = {
  postOfPhoto: PropTypes.object.isRequired,
};
