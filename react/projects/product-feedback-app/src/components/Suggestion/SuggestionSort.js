import React, { useState } from 'react';
import IconArrowDown from '../SVG/IconArrowDown';
import IconArrowUp from '../SVG/IconArrowUp';
import IconSuggestion from '../SVG/IconSuggestion';
import Card from '../UI/Card';
import classes from './SuggestionSort.module.css';

const SuggestionSort = (props) => {
  const [isVisible, setIsVisible] = useState('false');

  const toggleSortHandler = () => {
    // This is how to set in an imutable way
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <Card classes={classes.sort}>
      <IconSuggestion />
      <p className={classes.sort__count}>
        <span>{props.productRequestsCount}</span> Suggestions
      </p>
      <div className={classes.sort__options}>
        <div className={classes.sort__label}>
          <button onClick={toggleSortHandler}>
            Sort by : <span>{props.currentSort}</span>
          </button>
          {isVisible && <IconArrowDown />}
          {!isVisible && <IconArrowUp />}
        </div>
        {!isVisible && (
          <div className={classes.sort__container}>
            <ul className={classes.sort__list}>
              <li
                className={classes.sort__item}
                onClick={(event) => {
                  props.onUpdateSort(event);
                  toggleSortHandler();
                }}
              >
                Most Upvotes
              </li>
              <li
                className={classes.sort__item}
                onClick={(event) => {
                  props.onUpdateSort(event);
                  toggleSortHandler();
                }}
              >
                Least Upvotes
              </li>
              <li
                className={classes.sort__item}
                onClick={(event) => {
                  props.onUpdateSort(event);
                  toggleSortHandler();
                }}
              >
                Most Comments
              </li>
              <li
                className={classes.sort__item}
                onClick={(event) => {
                  props.onUpdateSort(event);
                  toggleSortHandler();
                }}
              >
                Least Comments
              </li>
            </ul>
          </div>
        )}
      </div>
      <button className={classes.sort__button}>+ Add Feedback</button>
    </Card>
  );
};

export default SuggestionSort;
