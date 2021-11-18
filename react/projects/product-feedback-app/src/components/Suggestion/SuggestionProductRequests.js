import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { suggestionActions } from '../../store/suggestion';
import IconArrowUp from '../SVG/IconArrowUp';
import IconComment from '../SVG/IconComment';
import IconIllustrationEmpty from '../SVG/IconIllustrationEmpty';
import Card from '../UI/Card';
import ProductFeedbackModal from '../UI/ProductFeedbackModal';
import classes from './SuggestionProductRequests.module.css';

const SuggestionFeedback = (props) => {
  // For ProductFeedbackModal
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const cardClickHandler = () => {
    setIsVisibleModal((prevIsVisibleModal) => !prevIsVisibleModal);
  };

  //For passing along card ID to modal
  const [currentCardID, setCurrentCardID] = useState();
  const cardIDHandler = (event, id) => {
    setCurrentCardID((prevCardID) => id);
  };

  // Dispatch upvote action
  const dispatch = useDispatch();

  const upvoteHandler = (event, id) => {
    event.stopPropagation();
    dispatch(suggestionActions.upvote(id));
  };

  // Sort productRequestsArray
  const sortedProductRequestsArray = [...props.productRequestsArray];

  switch (props.currentSort) {
    case 'Most Upvotes':
      const descendingUpvotes = (a, b) => {
        const upvotesA = a.upvotes;
        const upvotesB = b.upvotes;

        let comparison = 0;
        if (upvotesA > upvotesB) {
          comparison = 1;
        } else if (upvotesA < upvotesB) {
          comparison = -1;
        }
        return comparison * -1;
      };

      sortedProductRequestsArray.sort(descendingUpvotes);
      break;
    case 'Least Upvotes':
      const ascendingUpvotes = (a, b) => {
        const upvotesA = a.upvotes;
        const upvotesB = b.upvotes;

        let comparison = 0;
        if (upvotesA > upvotesB) {
          comparison = 1;
        } else if (upvotesA < upvotesB) {
          comparison = -1;
        }
        return comparison;
      };

      sortedProductRequestsArray.sort(ascendingUpvotes);
      break;
    case 'Most Comments':
      const descendingComments = (a, b) => {
        const commentsA = a.comments ? a.comments.length : 0;
        const commentsB = b.comments ? b.comments.length : 0;

        let comparison = 0;
        if (commentsA > commentsB) {
          comparison = 1;
        } else if (commentsA < commentsB) {
          comparison = -1;
        }
        return comparison * -1;
      };

      sortedProductRequestsArray.sort(descendingComments);
      break;
    case 'Least Comments':
      const ascendingComments = (a, b) => {
        const commentsA = a.comments ? a.comments.length : 0;
        const commentsB = b.comments ? b.comments.length : 0;

        let comparison = 0;
        if (commentsA > commentsB) {
          comparison = 1;
        } else if (commentsA < commentsB) {
          comparison = -1;
        }
        return comparison;
      };

      sortedProductRequestsArray.sort(ascendingComments);
      break;
    default:
  }

  return (
    <>
      {isVisibleModal && (
        <ProductFeedbackModal onClick={cardClickHandler} id={currentCardID} />
      )}
      <div className={classes.feedback}>
        <div className={classes.feedback__scroll}>
          {sortedProductRequestsArray.length === 0 && (
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
          {sortedProductRequestsArray.length > 0 &&
            sortedProductRequestsArray.map((request) => {
              return (
                <Card
                  classes={classes.feedback__item}
                  key={request.id}
                  onClick={(event) => {
                    cardClickHandler();
                    cardIDHandler(event, request.id);
                  }}
                >
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
                    <span>
                      {request.comments ? request.comments.length : 0}
                    </span>
                  </div>
                </Card>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default SuggestionFeedback;
