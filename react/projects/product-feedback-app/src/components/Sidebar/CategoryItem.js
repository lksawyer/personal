import { useDispatch } from 'react-redux';
import { categoryActions } from '../../store/category';
import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  const dispatch = useDispatch();
  const activeCategoryHandler = (event) => {
    dispatch(categoryActions.updateActive(event.target.innerText));
  };

  return (
    <li className={classes.category}>
      <button
        className={props.category === props.active ? classes.active : ''}
        onClick={activeCategoryHandler}
      >
        {props.category}
      </button>
    </li>
  );
};

export default CategoryItem;
