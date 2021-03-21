import PropTypes from 'prop-types';
import React from 'react';

import errorImg from 'imgError/notImage.png';
import s from './SearchError.module.css';

function SearchError({ message }) {
  return (
    <div className={s.errorWrapper} role="alert">
      <p>{message}</p>
      <img src={errorImg} alt="empty" />
    </div>
  );
}

SearchError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SearchError;
