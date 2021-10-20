import Card from '../UI/Card';
import classes from './SuggestionSort.module.css';

const SuggestionSort = (props) => {
  return (
    <Card classes={classes.sort}>
      <p className={classes.sort__count}>
        <span>0</span> Suggestions
      </p>
      <label htmlFor="sort">Sort by : </label>
      <select id="sort">
        <option value="Most Upvotes">Most Upvotes</option>
        <option value="Least Upvotes">Least Upvotes</option>
        <option value="Most Commnets">Most Commnets</option>
        <option value="Least Commnets">Least Commnets</option>
      </select>
      <button className={classes.sort__button}>+ Add Feedback</button>
    </Card>
  );
};

export default SuggestionSort;
