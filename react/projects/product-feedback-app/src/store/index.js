import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category';
import suggestionSReducer from './suggestion';

const store = configureStore({
  reducer: {
    category: categoryReducer,
    suggestion: suggestionSReducer,
  },
});

export default store;
