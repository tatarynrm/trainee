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
  console.log("pageNumbers", pageNumbers);
  console.log("currentPage", currentPage);

  return (
    <div>
      <ul className="pagination">
        {totalBlocks > 9 ? (
          <button
            disabled={currentPage === 1 ? true : false}
            className="btn btn-primary"
            onClick={prevPage}
          >
            Назад
          </button>
        ) : null}
        {totalBlocks > 9
          ? pageNumbers.map((number) => (
              <li
                className={
                  number === currentPage
                    ? "list-group-item disabled"
                    : "list-group-item"
                }
                disabled
                key={number}
              >
                <a
                  href="/"
                  className="page-link"
                  onClick={() => paginate(number)}
                >
                  {number}
                </a>
              </li>
            ))
          : null}
        {totalBlocks > 9 ? (
          <button
            disabled={currentPage === pageNumbers.length ? true : false}
            className="btn btn-primary"
            onClick={nextPage}
          >
            Вперед
          </button>
        ) : null}
      </ul>
    </div>
  );
};

export default Pagination;
