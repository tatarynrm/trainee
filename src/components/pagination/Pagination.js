import React from "react";
const Pagination = ({
  blocksPerPage,
  totalBlocks,
  currentPage,
  setCurrentPage,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumberCount = totalBlocks / blocksPerPage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(pageNumberCount); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {totalBlocks < 9 ? null : (
          <button className="btn btn-primary" onClick={prevPage}>
            Назад
          </button>
        )}
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a href="#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        {totalBlocks < 9 ? null : (
          <button className="btn btn-primary" onClick={nextPage}>
            Вперед
          </button>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
