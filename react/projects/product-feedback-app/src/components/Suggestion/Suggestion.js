import classes from './Suggestion.module.css';

const Suggestion = ({ children }) => {
  return <main className={classes.suggestion}>{children}</main>;
};

export default Suggestion;
