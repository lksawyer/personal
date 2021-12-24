import Background from "./components/Background/Background";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Expanded from "./components/Expanded/Expanded";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";
import axios from "axios";
import { useEffect, useState } from "react";

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

  // worldtimeapi API
  useEffect(() => {
    axios
      .get("http://worldtimeapi.org/api/ip")
      .then(function(response) {
        // handle success
        console.log("worldtimeapi response: ", response);
        setTime({
          abbreviation: response.data.abbreviation,
          datetime: response.data.datetime,
          day_of_week: response.data.day_of_week,
          day_of_year: response.data.day_of_year,
          timezone: response.data.timezone,
          unixtime: response.data.unixtime,
          week_number: response.dataweek_number
        });
      })
      .catch(function(error) {
        // handle error
        console.log("worldtimeapi error: ", error);
      });
  }, []);

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
