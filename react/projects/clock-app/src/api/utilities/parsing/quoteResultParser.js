const quoteResultParser = results => {
  return {
    author: results.data.author,
    en: results.data.en,
    id: results.data.id
  };
};

export default quoteResultParser;
