`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/post.css';
import '../../styles/button.css';
import '../../styles/fonts/iconfont/flaticon.css';

export default function PhotoFullSizePage({ location }) {
  console.log(location);
  const {
    id,
    urlsRegular,
    altDescription,
    userName,
    userLinksHtml,
    createdAt,
    likes,
    likedByUser,
    checked,
    likePostPhoto,
  } = location;

  const history = useHistory();
  const onButtonBack = () => history.goBack();
  const onLike = () => likePostPhoto(id);

  const like = likedByUser
    ? 'flaticon-like flaticon_style flaticon-like_style'
    : 'flaticon-heart flaticon_style';

  console.log(checked);
  console.log(like);

  return (
    <div className='post_full-size_container'>
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
            {/* <i className='flaticon-heart flaticon_style' onClick={onLike}></i> */}
            {/* <i className='flaticon-like flaticon_style flaticon-like_style'></i> */}
            {likes}
          </div>
        </div>
      </div>
      <div className='button_container'>
        <button className='button button__style' onClick={onButtonBack}>
          Go Back
        </button>
      </div>
    </div>
  );
}

PhotoFullSizePage.propTypes = {
  location: PropTypes.object.isRequired,
};