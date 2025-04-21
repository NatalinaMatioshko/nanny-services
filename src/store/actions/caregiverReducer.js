import { createSlice } from "@reduxjs/toolkit";
import { fetchCaregivers } from "../actions/caregiverActions";

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  filter: "all",
};

const caregiverSlice = createSlice({
  name: "caregivers",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaregivers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCaregivers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCaregivers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilter } = caregiverSlice.actions;
export const caregiverReducer = caregiverSlice.reducer;
