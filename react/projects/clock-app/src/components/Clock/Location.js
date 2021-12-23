import classes from "./Location.module.css";

const Location = () => {
  return (
    <div className={classes.Location}>
      <p className={classes.Location__content}>
        In
        <span> London, </span>
        <span>UK</span>
      </p>
    </div>
  );
};
export default Location;
