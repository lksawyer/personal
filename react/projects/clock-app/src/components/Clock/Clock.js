import classes from "./Clock.module.css";
import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";
import Button from "../Button/Button";

const Clock = () => {
  return (
    <div className={classes.Clock}>
      <div className={classes.Clock__content}>
        <Greeting />
        <Time />
        <Location />
      </div>
      <div className={classes.Clock__button}>
        <Button />
      </div>
    </div>
  );
};

export default Clock;
