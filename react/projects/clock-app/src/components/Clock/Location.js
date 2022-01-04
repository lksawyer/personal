import classes from "./Location.module.css";
import { useCallback, useEffect, useState } from "react";
import doAxios from "../../api/utilities/doAxios";
import resultsHandler from "../../api/utilities/resultsHandler";

const Location = () => {
  // State
  const [location, setLocation] = useState({
    city: null,
    region_code: null
  });

  const [makeCall, setMakeCall] = useState(true);

  // freegeoip API
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.freegeoip.app/json/?apikey=a431e350-64ec-11ec-83d7-95412e4b02ef"
  //     )
  //     .then(function(response) {
  //       // handle success
  //       console.log("location response: ", response);
  //       setLocation({
  //         city: response.data.city,
  //         region_code: response.data.region_code
  //       });
  //     })
  //     .catch(function(error) {
  //       // handle error
  //       console.log("location error: ", error);
  //     });
  // }, []);

  // freegeoip API
  const results = useCallback(results => {
    console.log("Inside Location - results: ", results);
    if (resultsHandler) {
      setLocation({
        city: results.data.city,
        region_code: results.data.region_code
      });
    }
  });

  useEffect(() => {
    console.log("Inside Location - useEffect");
    if (makeCall) {
      doAxios(
        "https://api.freegeoip.app/json/?apikey=a431e350-64ec-11ec-83d7-95412e4b02ef",
        undefined,
        results
      );
      setMakeCall(false);
    }
  }, [makeCall]);

  return (
    <div className={classes.Location}>
      <p className={classes.Location__content}>
        {location.city === null || location.region_code === null ? (
          "...Loading/Error"
        ) : (
          <>
            In
            <span> {location.city}, </span>
            <span>{location.region_code}</span>
          </>
        )}
      </p>
    </div>
  );
};
export default Location;
