import classes from "./Container.module.css";
import { useState } from "react";

const Container = ({ children }) => {
  // State

  const [periodOfDay, setPeriodOfDay] = useState({
    morning: false,
    afternoon: false,
    evening: true
  });

  return (
    <div
      className={
        periodOfDay.morning || periodOfDay.afternoon
          ? `${classes.Container}`
          : `${classes.Container} ${classes["Container--nighttime"]}`
      }
    >
      <div className={classes.Container__overlay}></div>
      <div className={classes.Container__content}>{children}</div>
    </div>
  );
};

export default Container;
