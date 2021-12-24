import classes from "./Quote.module.css";
import IconRresh from "../SVG/IconRefresh";
import axios from "axios";
import { useState } from "react";

const Quote = () => {
  // State
  const [quote, setQuote] = useState({
    author: null,
    en: null,
    id: null
  });

  // Handlers
  const quoteButtonHandler = () => {
    axios
      .get("https://programming-quotes-api.herokuapp.com/Quotes/random")
      .then(function(response) {
        // handle success
        console.log("response: ", response);
        setQuote({
          author: response.data.author,
          en: response.data.en,
          id: response.data.id
        });
      })
      .catch(function(error) {
        // handle error
        console.log("error: ", error);
      });
  };

  return (
    <>
      <div className={classes.Quote}>
        <p className={classes.Quote__text}>{quote.en}</p>
        <div className={classes.Quote__refresh}>
          <button
            type='button'
            className={classes.Quote__button}
            onClick={quoteButtonHandler}
          >
            <IconRresh />
          </button>
        </div>
        <p className={classes.Quote__citation}>{quote.author}</p>
      </div>
    </>
  );
};

export default Quote;
