import PropTypes from 'prop-types';
import React from 'react';

import s from './Button.module.css';

function LoadButton({ handleLoadMore }) {
  return (
    <button
      type="button"
      className={s.LoadButton}
      onClick={() => handleLoadMore()}
    >
      Load more
    </button>
  );
}

LoadButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};

export default LoadButton;