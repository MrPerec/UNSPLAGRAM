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

      const likeClass = likedByUser
        ? 'flaticon-like flaticon-like_font_18 flaticon-like_cursor flaticon-like_color_red'
        : 'flaticon-heart flaticon-like_font_18 flaticon-like_cursor';

      const likeDisplay = !login ? (
        <i className='flaticon-heart flaticon-like_font_18'></i>
      ) : (
        <i className={likeClass} onClick={onLike}></i>
      );

      const documentHeight = document.documentElement.clientHeight;
      const headerHeight = document.querySelector(`.js-header`).clientHeight;
      const imageHeight = documentHeight - (headerHeight + MARGIN_BOTTOM);
      const imageHeightSyle = { height: imageHeight };

      return (
        <main className='main' key={currentPhotoId}>
          <div className='fixed__container fixed__container_size'>
            <div className='center center_container'>
              <article className='post post_padding-top_10'>
                <img
                  style={imageHeightSyle}
                  className='post__image'
                  src={urlsRegular}
                  alt={altDescription}
                  title={altDescription}
                />
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
              <ButtonGoBack />
            </div>
          </div>
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
