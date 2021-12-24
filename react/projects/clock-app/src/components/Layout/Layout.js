import classes from "./Layout.module.css";
import { useState } from "react";

const Layout = ({ children }) => {
  // State
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={
        expanded
          ? `${classes.Layout} ${classes["Layout--expanded"]}`
          : classes.Layout
      }
    >
      <div
        className={
          expanded
            ? `${classes.Layout__row} ${classes["Layout__row--moveUp"]}`
            : classes.Layout__row
        }
      >
        <div className={classes.Layout__column}>{children[0]}</div>
      </div>
      <div className={classes.Layout__row}>
        <div className={classes.Layout__column}>{children[1]}</div>
        <div className={classes.Layout__column}>
          <div className={classes.Layout__buttonWrapper}>{children[2]}</div>
        </div>
      </div>
      <div
        className={
          expanded
            ? `${classes.Layout__row}`
            : `${classes.Layout__row}  ${classes["Layout__row--moveDown"]}`
        }
      >
        {children[3]}
      </div>
    </div>
  );
};

export default Layout;
