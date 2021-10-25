import { useDispatch } from 'react-redux';
import { suggestionActions } from '../../store/suggestion';
import IconArrowUp from '../SVG/IconArrowUp';
import IconComment from '../SVG/IconComment';
import IconIllustrationEmpty from '../SVG/IconIllustrationEmpty';
import Card from '../UI/Card';
import classes from './SuggestionProductRequests.module.css';

const SuggestionFeedback = (props) => {
  const dispatch = useDispatch();

  // Dispatch upvote action
  const upvoteHandler = (event, id) => {
    dispatch(suggestionActions.upvote(id));
  };

  return (
    <div className={classes.feedback}>
      <div className={classes.feedback__scroll}>
        {props.productRequestsArray.length === 0 && (
          <Card
            classes={`${classes.feedback__item} ${classes['feedback__item--none']}`}
          >
            <IconIllustrationEmpty />
            <h1>There is no feedback yet.</h1>
            <p>
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <button>+ Add Feedback</button>
          </Card>
        )}
        {props.productRequestsArray.length > 0 &&
          props.productRequestsArray.map((request) => {
            return (
              <Card classes={classes.feedback__item} key={request.id}>
                <button
                  className={classes.feedback__upvotes}
                  onClick={(event) => upvoteHandler(event, request.id)}
                >
                  <IconArrowUp />
                  <span>{request.upvotes}</span>
                </button>
                <div className={classes.feedback__body}>
                  <h2 className={classes.feedback__title}>{request.title}</h2>
                  <p className={classes.feedback__description}>
                    {request.description}
                  </p>
                  <p className={classes.feedback__category}>
                    {request.category}
                  </p>
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
