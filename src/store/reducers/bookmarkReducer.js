import { createSlice } from "@reduxjs/toolkit";
import { addBookmark, removeBookmark } from "../actions/bookmarkActions";

const initialState = {
  items: [],
};

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addBookmark, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeBookmark, (state, action) => {
        state.items = state.items.filter((name) => name !== action.payload);
      });
  },
});

export const bookmarkReducer = bookmarkSlice.reducer;
