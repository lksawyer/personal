import classes from "./Time.module.css";

const Time = props => {
  // Convert unix timestamp to standard time hh:mm
  const unix_timestamp = props.time.unixtime;
  const date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  if (hours > 12) {
    hours -= 12;
  }
  const minutes = "0" + date.getMinutes();
  const formattedTime = hours + ":" + minutes.substr(-2);

  console.log(formattedTime);
  return (
    <div className={classes.Time}>
      <p className={classes.Time__content}>
        <span className={classes.Time__hoursMin}>{formattedTime}</span>
        <span className={classes.Time__timeZone}>
          {props.time.abbreviation}
        </span>
      </p>
    </div>
  );
};

export default Time;
