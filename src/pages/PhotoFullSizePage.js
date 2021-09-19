`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/button.css';
import '../styles/post.css';
import '../styles/fonts/iconfont/flaticon.css';

export default function PhotoFullSizePage({ location }) {
  const history = useHistory();
  const onButtonClick = () => history.goBack();

  const {
    urlsRegular,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
  } = location;

  return (
    <div className='post_container'>
      <img
        className='image'
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
            Published on {createdAt}{' '}
          </time>
        </div>
        <div className='like_container'>
          <i className='flaticon-heart flaticon_style flaticon-heart_style'></i>
          {likes}
        </div>
      </div>
      <div className='button_container'>
        <button className='button button__style' onClick={onButtonClick}>
          Go Back
        </button>
      </div>
    </div>
  );
}

PhotoFullSizePage.propTypes = {
  location: PropTypes.object.isRequired,
};
