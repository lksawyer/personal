import classes from "./Layout.module.css";
import { useState } from "react";

const Layout = ({ children }) => {
  // State
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={classes.Layout}>
      <div
        className={
          expanded
            ? `${classes.Layout__section} ${classes["Layout__section--moveUp"]}`
            : classes.Layout__section
        }
      >
        {children[0]}
      </div>
      <div className={classes.Layout__section}>{children[1]}</div>
      <div
        className={
          expanded
            ? `${classes.Layout__section}`
            : `${classes.Layout__section}  ${classes["Layout__section--moveDown"]}`
        }
      >
        {children[2]}
      </div>
    </div>
  );
};

export default Layout;
