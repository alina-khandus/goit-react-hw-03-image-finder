import PropTypes from 'prop-types';
import React from 'react';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ src, alt, url, openModal }) {
  return (
    <li className={s.imageGalleryItem}>
      <img
        src={src}
        alt={alt}
        className={s.imageGalleryItemImage}
        onClick={() => openModal({ url, alt })}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;