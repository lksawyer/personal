import classes from "./Background.module.css";
import { useState } from "react";

const Background = ({ children }) => {
  // State
  const [daytimeState, setDaytimeState] = useState(true);

  return (
    <div
      className={
        daytimeState
          ? `${classes.background} ${classes.daytime}`
          : `${classes.background} ${classes.nighttime}`
      }
    >
      {children}
    </div>
  );
};

export default Background;
