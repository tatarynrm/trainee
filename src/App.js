import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormCreate from "./components/form-create/FormCreate";
import { removeBlock } from "../src/redux/block/blockSlice";
import Pagination from "./components/pagination/Pagination";
import AddMore from "./components/pagination/AddMore";
import DeletedBlocks from "./components/deleted-blocks/DeletedBlocks";
import BlockItem from "./components/block-item/BlockItem";
function App() {
  const block = useSelector((state) => state.block.block);
  const deleteBlocks = useSelector((state) => state.block.deletedBlocks);
  const [currentPage, setCurrentPage] = useState(1);
  const [blocksPerPage, setBlocksPerPage] = useState(9);
  const dispatch = useDispatch();
  useEffect(() => {}, [block]);
  const lastBlockIndex = currentPage * blocksPerPage;
  const firstBlockIndex = lastBlockIndex - blocksPerPage;
  const currentBlock = block.slice(firstBlockIndex, lastBlockIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const deleteBlock = (id, e) => {
    dispatch(removeBlock(id));
  };

  return (
    <div className="App">
      <div className="container">
        <FormCreate />
        <div className="blocks">
          {currentBlock.slice(0, blocksPerPage).map((item) => (
            <BlockItem key={item.id} item={item} deleteBlock={deleteBlock} />
          ))}
        </div>
        <Pagination
          blocksPerPage={blocksPerPage}
          totalBlocks={block.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
        />
        {block.length % 9 === 0 ? (
          <AddMore
            block={block}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            setBlocksPerPage={setBlocksPerPage}
            blocksPerPage={blocksPerPage}
          />
        ) : null}

        {deleteBlocks.length < 1 ? null : (
          <DeletedBlocks
            deleteBlocks={deleteBlocks}
            deleteBlock={deleteBlock}
          />
        )}
      </div>
    </div>
  );
}

export default App;
