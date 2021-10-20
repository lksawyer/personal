import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  return <li className={classes.category}>{props.category}</li>;
};

export default CategoryItem;
