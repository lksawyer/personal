import classes from "./Location.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Location = () => {
  // State
  const [location, setLocation] = useState({
    city: null,
    region_code: null
  });

  // freegeoip API
  useEffect(() => {
    axios
      .get(
        "https://api.freegeoip.app/json/?apikey=a431e350-64ec-11ec-83d7-95412e4b02ef"
      )
      .then(function(response) {
        // handle success
        console.log("location response: ", response);
        setLocation({
          city: response.data.city,
          region_code: response.data.region_code
        });
      })
      .catch(function(error) {
        // handle error
        console.log("location error: ", error);
      });
  }, []);

  return (
    <div className={classes.Location}>
      <p className={classes.Location__content}>
        In
        <span> {location.city}, </span>
        <span>{location.region_code}</span>
      </p>
    </div>
  );
};
export default Location;
