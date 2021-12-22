import classes from "./Quote.module.css";
import IconRresh from "../SVG/IconRefresh";

const Quote = () => {
  return (
    <>
      <div className={classes.Quote}>
        <p className={classes.Quote__text}>
          “The science of operations, as derived from mathematics more
          especially, is a science of itself, and has its own abstract truth and
          value.”
        </p>
        <div className={classes.Quote__refresh}>
          <IconRresh />
        </div>
        <p className={classes.Quote__citation}>Ada Lovelace</p>
      </div>
    </>
  );
};

export default Quote;
