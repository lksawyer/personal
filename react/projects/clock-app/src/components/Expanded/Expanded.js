import classes from "./Expanded.module.css";
import { useState } from "react";

const Expanded = () => {
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
          ? `${classes.Expanded}`
          : `${classes.Expanded} ${classes["Expanded--nighttime"]}`
      }
    >
      <ul className={classes.Expanded__list}>
        <li
          className={
            periodOfDay.morning || periodOfDay.afternoon
              ? `${classes.Expanded__item}`
              : `${classes.Expanded__item} ${classes["Expanded__item--nighttime"]}`
          }
        >
          Current Timezone
          <span
            className={
              periodOfDay.morning || periodOfDay.afternoon
                ? `${classes.Expanded__value}`
                : `${classes.Expanded__value} ${classes["Expanded__value--nighttime"]}`
            }
          >
            Europe/London
          </span>
        </li>
        <li
          className={
            periodOfDay.morning || periodOfDay.afternoon
              ? `${classes.Expanded__item}`
              : `${classes.Expanded__item} ${classes["Expanded__item--nighttime"]}`
          }
        >
          Day of the year
          <span
            className={
              periodOfDay.morning || periodOfDay.afternoon
                ? `${classes.Expanded__value}`
                : `${classes.Expanded__value} ${classes["Expanded__value--nighttime"]}`
            }
          >
            295
          </span>
        </li>
        <li
          className={
            periodOfDay.morning || periodOfDay.afternoon
              ? `${classes.Expanded__item}`
              : `${classes.Expanded__item} ${classes["Expanded__item--nighttime"]}`
          }
        >
          Day of the week
          <span
            className={
              periodOfDay.morning || periodOfDay.afternoon
                ? `${classes.Expanded__value}`
                : `${classes.Expanded__value} ${classes["Expanded__value--nighttime"]}`
            }
          >
            5
          </span>
        </li>
        <li
          className={
            periodOfDay.morning || periodOfDay.afternoon
              ? `${classes.Expanded__item}`
              : `${classes.Expanded__item} ${classes["Expanded__item--nighttime"]}`
          }
        >
          Week number
          <span
            className={
              periodOfDay.morning || periodOfDay.afternoon
                ? `${classes.Expanded__value}`
                : `${classes.Expanded__value} ${classes["Expanded__value--nighttime"]}`
            }
          >
            42
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Expanded;
