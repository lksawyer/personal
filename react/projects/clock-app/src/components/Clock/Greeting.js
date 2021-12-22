import { useState } from "react";
import IconSun from "../SVG/IconSun";
import IconMoon from "../SVG/IconMoon";
import classes from "./Greeting.module.css";

const Greeting = () => {
  // State
  const [periodOfDay, setPeriodOfDay] = useState({
    morning: true,
    afternoon: false,
    evening: false
  });

  return (
    <div className={classes.Greeting}>
      {periodOfDay.morning && (
        <>
          <div className={classes.Greeting__icon}>
            <IconSun />
          </div>
          <p
            className={`${classes.Greeting__msg} ${classes["Greeting__msg--mobile"]}`}
          >
            Good morning
          </p>
          <p className={classes.Greeting__msg}>Good morning, it's currently</p>
        </>
      )}
      {periodOfDay.afternoon && (
        <>
          <div className={classes.Greeting__icon}>
            <IconSun />
          </div>
          <p
            className={`${classes.Greeting__msg} ${classes["Greeting__msg--mobile"]}`}
          >
            Good afternoon
          </p>
          <p className={classes.Greeting__msg}>
            Good afternoon, it's currently
          </p>
        </>
      )}
      {periodOfDay.evening && (
        <>
          <div className={classes.Greeting__icon}>
            <IconMoon />
          </div>
          <p
            className={`${classes.Greeting__msg} ${classes["Greeting__msg--mobile"]}`}
          >
            Good evening
          </p>
          <p className={classes.Greeting__msg}>Good evening, it's currently</p>
        </>
      )}
    </div>
  );
};

export default Greeting;
