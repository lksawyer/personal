import classes from './CategoryItem.module.css';
import { categoryActions } from '../../store/category';
import { useDispatch } from 'react-redux';

const CategoryItem = (props) => {
  const dispatch = useDispatch();
  const clickHandler = (event) => {
    dispatch(categoryActions.updateActive(event.target.innerText));
  };

  return (
    <li className={classes.category}>
      <button
        className={props.category === props.active ? classes.active : ''}
        onClick={clickHandler}
      >
        {props.category}
      </button>
    </li>
  );
};

export default CategoryItem;
