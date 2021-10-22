import { configureStore } from '@reduxjs/toolkit';
import baseData from '../FEM/data.json';

// List of categories we can filter application by
const categories = {
  All: true,
  UI: false,
  UX: false,
  Enhancement: false,
  Bug: false,
  Feature: false,
};

// Create new obj that combines all needed states
const updatedData = { ...baseData, categories };

// Redux Toolkit
// createSlice({
//   name: 'categories',
//   initialState: initialCategoryState,
//   reducers: {
//     updateActive(state, action) {
//       const keys = Object.keys(state);
//       keys.map((x) => {
//         if (state[x] === action.active) {
//           state[x] = action.active;
//         } else {
//           state[x] = false;
//         }
//       });
//     },
//   },
// });

// Reducer function for the store
const storeReducer = (state = { updatedData }, action) => {
  return state;
};

// Store
const store = configureStore({ reducer: storeReducer });

export default store;
