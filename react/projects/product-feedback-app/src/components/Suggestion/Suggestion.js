import { useSelector } from 'react-redux';
import classes from './Suggestion.module.css';
import SuggestionProductRequests from './SuggestionProductRequests';
import SuggestionSort from './SuggestionSort';

const Suggestion = () => {
  // Get current active category
  const activeCategory = useSelector((state) => state.category.active);

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
      <SuggestionSort productRequestsArray={productRequestsArray} />
      <SuggestionProductRequests productRequestsArray={productRequestsArray} />
    </main>
  );
};

export default Suggestion;
