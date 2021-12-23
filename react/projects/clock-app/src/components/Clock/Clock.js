import classes from "./Clock.module.css";
import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";

const Clock = () => {
  return (
    <div className={classes.Clock}>
      <Greeting />
      <Time />
      <Location />
    </div>
  );
};

export default Clock;
