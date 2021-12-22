import classes from "./Expanded.module.css";

const Expanded = () => {
  return (
    <div className={classes.Expanded}>
      <ul className={classes.Expanded__list}>
        <li className={classes.Expanded__item}>
          Current Timezone
          <span className={classes.Expanded__value}>Europe/London</span>
        </li>
        <li className={classes.Expanded__item}>
          Day of the year
          <span className={classes.Expanded__value}>295</span>
        </li>
        <li className={classes.Expanded__item}>
          Day of the month
          <span className={classes.Expanded__value}>5</span>
        </li>
        <li className={classes.Expanded__item}>
          Week number
          <span className={classes.Expanded__value}>42</span>
        </li>
      </ul>
    </div>
  );
};

export default Expanded;
