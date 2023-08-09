import React from "react";

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage }) => {
  return (
    <div>
      <button onClick={onPrevPage} disabled={currentPage === 1}>
        Prev
      </button>
      <span>{currentPage}/{totalPages}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
