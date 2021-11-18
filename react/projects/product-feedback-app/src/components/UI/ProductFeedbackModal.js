import { useDispatch, useSelector } from 'react-redux';
import { suggestionActions } from '../../store/suggestion';
import Comment from '../Comment/Comment';
import IconArrowUp from '../SVG/IconArrowUp';
import IconComment from '../SVG/IconComment';
import Card from '../UI/Card';
import classes from './ProductFeedbackModal.module.css';

const ProductFeedbackModal = (props) => {
  // Dispatch upvote action
  const dispatch = useDispatch();

  const upvoteHandler = (event, id) => {
    event.stopPropagation();
    dispatch(suggestionActions.upvote(id));
  };

  // Use redux to pull out list of product requests
  const productRequestsArray = useSelector(
    (state) => state.suggestion.productRequests
  );

  //Pull out request that matches id
  console.log('Inside ProductFeedbackModla: ', productRequestsArray);
  console.log('Inside ProductFeedbackModla: ', props.id);

  // Use redux to pull out list of product requests
  // Filter request by props.id
  const filteredProductRequestsArray = [...productRequestsArray].filter(
    (request) => request.id === props.id
  );

  console.log('Inside ProductFeedbackModla: ', productRequestsArray);
  console.log('Inside ProductFeedbackModla: ', filteredProductRequestsArray);

  return (
    <div className={classes['modal_backdrop']}>
      <div className={classes['modal__product-feedback']}>
        <button onClick={props.onClick}>Go Back</button>
        <Card classes={classes.feedback__item}>
          <button
            className={classes.feedback__upvotes}
            onClick={(event) => upvoteHandler(event, props.id)}
          >
            <IconArrowUp />
            <span>{filteredProductRequestsArray[0].upvotes}</span>
          </button>
          <div className={classes.feedback__body}>
            <h2 className={classes.feedback__title}>
              {filteredProductRequestsArray[0].title}
            </h2>
            <p className={classes.feedback__description}>
              {filteredProductRequestsArray[0].description}
            </p>
            <p className={classes.feedback__category}>
              {filteredProductRequestsArray[0].category}
            </p>
          </div>
          <div
            className={
              filteredProductRequestsArray[0].comments
                ? classes.feedback__comments
                : `${classes.feedback__comments} ${classes['feedback__comments--empty']}`
            }
          >
            <IconComment />
            <span>
              {filteredProductRequestsArray[0].comments
                ? filteredProductRequestsArray[0].comments.length
                : 0}
            </span>
          </div>
        </Card>
        <Card>
          <h2>4 Comments</h2>
          <Comment />
        </Card>
        <Card>
          <h2>Add Comment</h2>
          <textarea
            id=""
            name=""
            rows="4"
            cols="50"
            placeholder="Type your comment here"
          ></textarea>
          <div>
            <span>250 Characters left</span>
            <button> Post Comment</button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductFeedbackModal;
