const locationResultParser = results => {
  return {
    city: results.data.city,
    region_code: results.data.region_code
  };
};

export default locationResultParser;
