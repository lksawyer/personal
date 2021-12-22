import classes from "./Container.module.css";
import { useState } from "react";

const Container = ({ children }) => {
  // State
  const [daytimeState, setDaytimeState] = useState(true);

  return (
    <div
      className={
        daytimeState
          ? `${classes.Container} ${classes["Container--daytime"]}`
          : `${classes.Container} ${classes["Container--nighttime"]}`
      }
    >
      <div className={classes.Container__overlay}></div>
      <div className={classes.Container__content}>{children}</div>
    </div>
  );
};

export default Container;
