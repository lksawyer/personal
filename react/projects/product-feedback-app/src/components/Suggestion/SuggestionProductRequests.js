import Card from '../UI/Card';
import classes from './SuggestionProductRequests.module.css';

const SuggestionFeedback = (props) => {
  return (
    <Card classes={classes.feedback}>
      <div className={classes.feedback__upvotes}>112</div>
      <div className={classes.feedback__body}>
        <h2 className={classes.feedback__title}>Add tages for solutions</h2>
        <p className={classes.feedback__content}>
          Easier to search for solutions based on a specific stack.
        </p>
        <p className={classes.feedback__category}>Enhancement</p>
      </div>
      <div className={classes.feedback__comments}>2</div>
    </Card>
  );
};

export default SuggestionFeedback;
