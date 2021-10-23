import { createSlice } from '@reduxjs/toolkit';
import data from '../FEM/data.json';

const initialSuggestionState = data;

const suggestionSlice = createSlice({
  name: 'suggestion',
  initialState: initialSuggestionState,
  reducers: {
    addComment(state, action) {
      // Some code used to update state
    },
    removeComment(state, action) {
      // Some code used to update state
    },
  },
});

export const suggestionActions = suggestionSlice.actions;

export default suggestionSlice.reducer;
