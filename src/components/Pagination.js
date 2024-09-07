import React from 'react';
import './Pagination.css';

const Pagination = ({ page, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <div className="pagination-item" onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
        <img src="/image/left.svg" alt="Previous" />
      </div>
      {[...Array(totalPages)].map((_, i) => (
        <div
          key={`pagination-item-${i}`}
          className={`pagination-item ${page === i + 1 ? 'active' : ''}`}
          onClick={() => handlePageChange(i + 1)}
        >
          {i + 1}
        </div>
      ))}
      <div className="pagination-item" onClick={() => handlePageChange(page + 1)} disabled={page === totalPages}>
        <img src="/image/right.svg" alt="Next" />
      </div>
    </div>
  );
};

export default Pagination;

