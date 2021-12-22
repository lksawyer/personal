import classes from "./Button.module.css";
import { useState } from "react";
import IconArrowUp from "../SVG/IconArrowUp";
import IconArrowDown from "../SVG/IconArrowDown";

const Button = () => {
  // State
  const [expanded, setExpanded] = useState(false);
  return (
    <button className={classes.Button} type='button'>
      {!expanded && (
        <>
          <span className={classes.Button__text}>More</span>
          <span className={classes.Button__circle}>
            <IconArrowDown />
          </span>
        </>
      )}
      {expanded && (
        <>
          <span className={classes.Button__text}>Less</span>
          <span className={classes.Button__circle}>
            <IconArrowUp />
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
