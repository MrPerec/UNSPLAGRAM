`use strict`;

import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../styles/post.css';
import '../../styles/button.css';
import '../../styles/fonts/iconfont/flaticon.css';

/* export default function PhotoFullSizePage({ location }) {
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
    likePostAction,
  } = location;

  const history = useHistory();
  const onButtonBack = () => history.goBack();
  const onLike = () => likePostAction(id);

  const like = likedByUser
    ? 'flaticon-like flaticon_style flaticon-like_style'
    : 'flaticon-heart flaticon_style';

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
} */

export default function PhotoFullSizePage(props) {
  console.log(props);
  const currentPostId = props.match.params.id;
  const history = useHistory();
  const onButtonBack = () => history.goBack();

  return props.listPostPhotos.forEach((post) => {
    console.log(post.id === currentPostId);
    if (post.id === currentPostId) {
      const {
        id,
        urlsRegular,
        altDescription,
        userName,
        userLinksHtml,
        createdAt,
        likes,
        likedByUser,
      } = post;

      const onLike = () => likePostAction(id);

      const like = likedByUser
        ? 'flaticon-like flaticon_style flaticon-like_style'
        : 'flaticon-heart flaticon_style';

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
  });
}

// PhotoFullSizePage.propTypes = {
//   location: PropTypes.object.isRequired,
// };
