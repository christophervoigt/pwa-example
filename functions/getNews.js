const axios = require('axios');

const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';

exports.handler = async (event, context, callback) => {
  return axios.get(API_ENDPOINT)
    .then((response) => {
      callback(null, {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response.data),
      });
    })
    .catch((error) => {
      callback(error);
    });
};
