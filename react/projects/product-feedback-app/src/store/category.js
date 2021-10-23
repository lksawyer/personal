import { createSlice } from '@reduxjs/toolkit';

const initialCategoryState = {
  categoryList: ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'],
  active: 'All',
};

const categorySlice = createSlice({
  name: 'category',
  initialState: initialCategoryState,
  reducers: {
    addCategory(state, action) {
      // Some code used to update state
    },
    removeCategory(state, action) {
      // Some code used to update state
    },
    updateActive(state, action) {
      // Some code used to update state
      state.active = action.payload;
    },
  },
});

export const categoryActions = categorySlice.actions;

export default categorySlice.reducer;
