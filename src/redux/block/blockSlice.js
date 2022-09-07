import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
const initialState = {
  block: localStorage.getItem("blockItems")
    ? JSON.parse(localStorage.getItem("blockItems"))
    : [],
  deletedBlocks: localStorage.getItem("deletedBlocks")
    ? JSON.parse(localStorage.getItem("deletedBlocks"))
    : [],
};

export const blockSlice = createSlice({
  name: "blocks",
  initialState,
  reducers: {
    addBlock: (state, action) => {
      const blockItem = {
        id: uniqid(),
        title: action.payload.title,
        link: action.payload.link,
        text: action.payload.text,
        photo: action.payload.photo,
      };
      state.block.push(blockItem);
      localStorage.setItem("blockItems", JSON.stringify(state.block));
    },
    removeBlock: (state, action) => {
      const deletedElement = state.block.find(
        (item) => item.id === action.payload
      );
      if (deletedElement) {
        state.deletedBlocks.push(deletedElement);
      }
      localStorage.setItem(
        "deletedBlocks",
        JSON.stringify(state.deletedBlocks)
      );
      state.block = state.block.filter((item) => item.id !== action.payload);
      localStorage.setItem("blockItems", JSON.stringify(state.block));
    },
  },
});

export const { addBlock, removeBlock } = blockSlice.actions;

export default blockSlice.reducer;
