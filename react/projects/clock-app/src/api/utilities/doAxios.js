import axios from "axios";

const doAxios = (url = undefined, options = undefined, callback) => {
  axios
    .get(url)
    .then(function(response) {
      // handle success
      callback(response);
    })
    .catch(function(error) {
      // handle error
      callback(error);
    });
};

export default doAxios;
