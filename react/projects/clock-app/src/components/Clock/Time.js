import classes from "./Time.module.css";

const Time = () => {
  return (
    <div className={classes.Time}>
      <p className={classes.Time__content}>
        <span className={classes.Time__hoursMin}>11:37</span>
        <span className={classes.Time__timeZone}> bst</span>
      </p>
    </div>
  );
};

export default Time;
