import classes from "./Clock.module.css";
import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";

const Clock = props => {
  return (
    <div className={classes.Clock}>
      <Greeting />
      <Time time={props.time} />
      <Location />
    </div>
  );
};

export default Clock;
