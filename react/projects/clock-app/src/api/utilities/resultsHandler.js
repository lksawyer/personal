const resultsHandler = results => {
  if (results.status === 200) {
    return true;
  } else {
    return false;
  }
};

export default resultsHandler;
