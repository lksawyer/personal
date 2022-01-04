import Background from "./components/Background/Background";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Expanded from "./components/Expanded/Expanded";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";
import { useCallback, useEffect, useState } from "react";
import doAxios from "./api/utilities/doAxios";
import resultsHandler from "./api/utilities/resultsHandler";
import timeResultParser from "./api/utilities/parsing/timeResultParser";

function App() {
  // State
  const [time, setTime] = useState({
    abbreviation: null,
    datetime: null,
    day_of_week: null,
    day_of_year: null,
    timezone: null,
    unixtime: null,
    week_number: null
  });

  const [makeCall, setMakeCall] = useState(true);

  // worldtimeapi API
  const results = useCallback(results => {
    console.log("Inside App - results: ", results);
    if (resultsHandler) {
      setTime(timeResultParser(results));
    }
  });

  useEffect(() => {
    console.log("Inside App - useEffect");
    if (makeCall) {
      doAxios("http://worldtimeapi.org/api/ip", undefined, results);
      setMakeCall(false);
    }
  }, [makeCall]);

  return (
    <>
      <Background />
      <Layout>
        <Quote />
        <Clock time={time} />
        <Button />
        <Expanded />
      </Layout>
    </>
  );
}

export default App;
