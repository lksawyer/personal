import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  const clickHandler = () => {
    console.log('clicked');
  };

  return (
    <li className={classes.category}>
      <button
        className={props.active ? classes.active : ''}
        onClick={clickHandler}
      >
        {props.category}
      </button>
    </li>
  );
};

export default CategoryItem;
