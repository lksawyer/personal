import React from 'react';
import IconSuggestion from '../SVG/IconSuggestion';
import Card from '../UI/Card';
import classes from './SuggestionSort.module.css';

const SuggestionSort = (props) => {
  const sortedProductRequestsArray = '';

  return (
    <Card classes={classes.sort}>
      <IconSuggestion />
      <p className={classes.sort__count}>
        <span>{props.productRequestsArray.length}</span> Suggestions
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
