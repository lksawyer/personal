import classes from "./Button.module.css";
import { useState } from "react";
import IconArrow from "../SVG/IconArrow";

const Button = () => {
  // State
  const [expanded, setExpanded] = useState(false);

  // Handlers
  const handleButtonClick = () => {
    setExpanded(currState => !currState);
  };

  return (
    <button
      className={classes.Button}
      type='button'
      onClick={handleButtonClick}
    >
      {!expanded && (
        <>
          <span className={classes.Button__text}>More</span>
          <span className={classes.Button__circle}>
            <IconArrow />
          </span>
        </>
      )}
      {expanded && (
        <>
          <span className={classes.Button__text}>Less</span>
          <span
            className={`${classes.Button__circle} ${classes["Button__circle--expanded"]}`}
          >
            <IconArrow />
          </span>
        </>
      )}
    </button>
  );
};

export default Button;
