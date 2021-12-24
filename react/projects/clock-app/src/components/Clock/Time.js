import classes from "./Time.module.css";

const Time = props => {
  // Convert time prop to readable time
  const date = new Date(props.time.datetime).toISOString();
  console.log("date: ", date);
  return (
    <div className={classes.Time}>
      <p className={classes.Time__content}>
        <span className={classes.Time__hoursMin}>{date}</span>
        <span className={classes.Time__timeZone}>
          {props.time.abbreviation}
        </span>
      </p>
    </div>
  );
};

export default Time;
