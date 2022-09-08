import React from "react";

const AddMore = ({
  block,
  currentPage,
  setCurrentPage,
  setBlocksPerPage,
  blocksPerPage,
}) => {
  const addMore = () => {
    setBlocksPerPage((prev) => prev + 9);
  };
  const hideBlocks = () => {
    setBlocksPerPage((prev) => prev - 9);
  };
  return (
    <>
      {blocksPerPage === 9 ? (
        <button className="btn btn-primary" onClick={addMore}>
          Добавити більше
        </button>
      ) : (
        <button className="btn btn-primary" onClick={hideBlocks}>
          Приховати
        </button>
      )}
    </>
  );
};

export default AddMore;
