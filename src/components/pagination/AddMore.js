import React from "react";

const AddMore = ({ setBlocksPerPage }) => {
  const addMore = () => {
    setBlocksPerPage((prev) => prev + 9);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={addMore}>
        Завантажити більше
      </button>
    </>
  );
};

export default AddMore;
