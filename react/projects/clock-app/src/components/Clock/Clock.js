import classes from "./Clock.module.css";
import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";

const Clock = () => {
  return (
    <div className={classes.Clock}>
      <div className={classes.Clock__greeting}>
        <Greeting />
      </div>
      <div className={classes.Clock__time}>
        <Time />
      </div>
      <div className={classes.Clock__location}>
        <Location />
      </div>
    </div>
  );
};

export default Clock;
