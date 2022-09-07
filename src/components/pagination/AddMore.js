import React from "react";

const AddMore = ({ block, currentPage, setCurrentPage, setBlocksPerPage }) => {
  const addMore = () => {
    setBlocksPerPage((prev) => prev + 9);
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={addMore}>
        Добавити більше
      </button>
    </div>
  );
};

export default AddMore;
