import classes from './Card.module.css';

const Card = (props) => {
  const combinedClasses = props.classes
    ? `${classes.card} ${props.classes}`
    : classes.card;

  return (
    <div className={combinedClasses} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
