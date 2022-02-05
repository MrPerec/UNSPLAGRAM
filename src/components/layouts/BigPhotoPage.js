`use strict`;

import React from 'react';
import PropTypes from 'prop-types';
import ButtonGoBack from './ButtonGoBack';
import { MARGIN_BOTTOM } from '../../constants/constants';

import '../../styles/post.css';
import '../../styles/fonts/iconfont/flaticon.css';

export default function BigPhotoPage({
  auth,
  photoList,
  likePhotoAction,
  removeLikePhotoAction,
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
        ? () => removeLikePhotoAction(currentPhotoId)
        : () => likePhotoAction(currentPhotoId);

      const like = likedByUser
        ? 'flaticon-like flaticon_style flaticon_style_cursor flaticon-like_style'
        : 'flaticon-heart flaticon_style flaticon_style_cursor';

      const likeDisplay = !login ? (
        <i className='flaticon-heart flaticon_style'></i>
      ) : (
        <i className={like} onClick={onLike}></i>
      );

      const documentHeight = document.documentElement.clientHeight;
      const headerHeight = document.querySelector(`.js-header`).clientHeight;
      const imageHeight = documentHeight - (headerHeight + MARGIN_BOTTOM);
      const imageHeightSyle = { height: imageHeight };

      return (
        <main className='main post_full-size_container' key={currentPhotoId}>
          <article className='article post_container'>
            <img
              style={imageHeightSyle}
              className='image image-full-size'
              src={urlsRegular}
              alt={altDescription}
              title={altDescription}
            />
            <section className='section post_text_container'>
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
            </section>
          </article>
          <ButtonGoBack />
        </main>
      );
    }
  });

  return <div>{bigPhoto}</div>;
}

BigPhotoPage.propTypes = {
  auth: PropTypes.object.isRequired,
  photoList: PropTypes.array.isRequired,
  likePhotoAction: PropTypes.func.isRequired,
  removeLikePhotoAction: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};
