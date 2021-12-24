import classes from "./Background.module.css";
import { useState } from "react";

const Background = () => {
  // State

  const [periodOfDay, setPeriodOfDay] = useState({
    morning: true,
    afternoon: false,
    evening: false
  });

  return (
    <div
      className={
        periodOfDay.morning || periodOfDay.afternoon
          ? `${classes.Background}`
          : `${classes.Background} ${classes["Background--nighttime"]}`
      }
    >
      <div className={classes.Background__overlay}></div>
    </div>
  );
};

export default Background;
