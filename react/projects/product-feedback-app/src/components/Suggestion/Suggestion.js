import { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './Suggestion.module.css';
import SuggestionProductRequests from './SuggestionProductRequests';
import SuggestionSort from './SuggestionSort';

const Suggestion = () => {
  // Get current active category
  const activeCategory = useSelector((state) => state.category.active);

  // Current Sort State
  const [currentSort, setCurrentSort] = useState('Most Upvotes');

  const updateSortHandler = (event) => {
    // How to set this in an immutable way?
    setCurrentSort(() => {
      return event.target.innerHTML;
    });
  };

  // Use redux to pull out list of product requests
  // Filter these request by activeCategory
  const productRequestsArray = useSelector((state) => {
    if (activeCategory.toLowerCase() === 'all') {
      return state.suggestion.productRequests;
    }
    return state.suggestion.productRequests.filter(
      (request) =>
        request.category.toLowerCase() === activeCategory.toLowerCase()
    );
  });

  return (
    <main className={classes.suggestion}>
      <SuggestionSort
        productRequestsCount={productRequestsArray.length}
        currentSort={currentSort}
        onUpdateSort={updateSortHandler}
      />
      <SuggestionProductRequests
        productRequestsArray={productRequestsArray}
        currentSort={currentSort}
      />
    </main>
  );
};

export default Suggestion;
