const timeResultParser = results => {
  return {
    abbreviation: results.data.abbreviation,
    datetime: results.data.datetime,
    day_of_week: results.data.day_of_week,
    day_of_year: results.data.day_of_year,
    timezone: results.data.timezone,
    unixtime: results.data.unixtime,
    week_number: results.dataweek_number
  };
};

export default timeResultParser;
