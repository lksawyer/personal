import classes from "./Quote.module.css";
import IconRresh from "../SVG/IconRefresh";
import { useCallback, useEffect, useState } from "react";
import doAxios from "../../api/utilities/doAxios";
import resultsHandler from "../../api/utilities/resultsHandler";
import quoteResultParser from "../../api/utilities/parsing/quoteResultParser";

const Quote = () => {
  // State
  const [quote, setQuote] = useState({
    author: null,
    en: null,
    id: null
  });

  const [makeCall, setMakeCall] = useState(true);

  // Handlers
  // const quoteButtonHandler = () => {
  //   axios
  //     .get("https://programming-quotes-api.herokuapp.com/Quotes/random")
  //     .then(function(response) {
  //       // handle success
  //       console.log("quote response: ", response);
  //       setQuote({
  //         author: response.data.author,
  //         en: response.data.en,
  //         id: response.data.id
  //       });
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       console.log("quote error: ", error);
  //     });
  // };

  // programming-quotes-api API
  const results = useCallback(results => {
    console.log("Inside Quote - results: ", results);
    if (resultsHandler) {
      setQuote(quoteResultParser(results));
    }
  });

  useEffect(() => {
    console.log("Inside Quote - useEffect");
    if (makeCall) {
      doAxios(
        "https://programming-quotes-api.herokuapp.com/Quotes/random",
        undefined,
        results
      );
      setMakeCall(false);
    }
  }, [makeCall]);

  return (
    <>
      <div className={classes.Quote}>
        <p className={classes.Quote__text}>
          {quote.en === null ? "...Loading/Error" : quote.en}
        </p>
        <div className={classes.Quote__refresh}>
          <button
            type='button'
            className={classes.Quote__button}
            onClick={() => {
              setMakeCall(true);
            }}
          >
            <IconRresh />
          </button>
        </div>
        <p className={classes.Quote__citation}>
          {quote.author === null ? "...Loading/Error" : quote.author}
        </p>
      </div>
    </>
  );
};

export default Quote;
