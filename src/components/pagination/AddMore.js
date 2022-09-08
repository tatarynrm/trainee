import React from "react";

const AddMore = ({ setBlocksPerPage }) => {
  const addMore = () => {
    setBlocksPerPage((prev) => prev + 9);
  };

  return (
    <>
      <button className="btn btn-primary" onClick={addMore}>
        Добавити більше
      </button>
    </>
  );
};

export default AddMore;
