import { useDispatch, useSelector } from 'react-redux';
import IconArrowUp from '../SVG/IconArrowUp';
import IconComment from '../SVG/IconComment';
import Card from '../UI/Card';
import classes from './SuggestionProductRequests.module.css';

const SuggestionFeedback = (props) => {
  const dispatch = useDispatch();
  // Use redux to pull out list of product requests
  const productRequestsArray = useSelector(
    (state) => state.suggestion.productRequests
  );

  // console.log(productRequestsArray);
  // Use redux to pull out active catgory
  const activeCategory = useSelector((state) => state.category.active);

  return (
    <div className={classes.feedback}>
      <div className={classes.feedback__scroll}>
        {productRequestsArray.map((request) => {
          if (activeCategory !== 'All') {
            if (activeCategory.toLowerCase() !== request.category) {
              return;
            }
          }

          return (
            <Card classes={classes.feedback__item} key={request.id}>
              <button className={classes.feedback__upvotes}>
                <IconArrowUp />
                <span>{request.upvotes}</span>
              </button>
              <div className={classes.feedback__body}>
                <h2 className={classes.feedback__title}>{request.title}</h2>
                <p className={classes.feedback__description}>
                  {request.description}
                </p>
                <p className={classes.feedback__category}>{request.category}</p>
              </div>
              <div
                className={
                  request.comments
                    ? classes.feedback__comments
                    : `${classes.feedback__comments} ${classes['feedback__comments--empty']}`
                }
              >
                <IconComment />
                <span>{request.comments ? request.comments.length : 0}</span>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default SuggestionFeedback;
