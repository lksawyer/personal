import classes from "./Location.module.css";

const Location = () => {
  return (
    <div className={classes.Location}>
      <p className={classes.Location__content}>
        In
        <span className={classes.Location__city}> London, </span>
        <span className={classes.Location__country}>UK</span>
      </p>
    </div>
  );
};
export default Location;
