import Background from "./components/Background/Background";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Expanded from "./components/Expanded/Expanded";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import doAxios from "./api/utilities/doAxios";
import resultsHandler from "./api/utilities/resultsHandler";

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
      setTime({
        abbreviation: results.data.abbreviation,
        datetime: results.data.datetime,
        day_of_week: results.data.day_of_week,
        day_of_year: results.data.day_of_year,
        timezone: results.data.timezone,
        unixtime: results.data.unixtime,
        week_number: results.dataweek_number
      });
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
