/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */
import React from 'react';
import PropTypes from 'prop-types';
import { constant } from '../../constant';

const Pagination = (props) => {
  const { pageNumber, isLoading, onClickPrevNext } = props;
  return (
    <div className="carousel-container" style={{ paddingTop: '20px', textAlign: 'right' }}>
      <button
        role="navigation"
        aria-label="Previous Button"
        disabled={pageNumber === 0 || isLoading}
        name={constant.PREV}
        onClick={onClickPrevNext}
        style={{ marginRight: '10px' }}
        type="button"
        className="btn red darken-4"
      >
        Previous
      </button>
      <button
        role="navigation"
        aria-label="Next Button"
        disabled={isLoading}
        name={constant.NEXT}
        onClick={onClickPrevNext}
        type="button"
        className="btn red darken-4"
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  pageNumber: PropTypes.number,
  isLoading: PropTypes.bool,
  onClickPrevNext: PropTypes.func,
};

Pagination.defaultProps = {
  pageNumber: 0,
  isLoading: false,
  onClickPrevNext: null,
};

export default Pagination;
