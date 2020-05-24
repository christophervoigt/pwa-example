import fetch from "node-fetch";

exports.handler = (event, context, callback) => {
  const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';

  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => callback(null, { statusCode: 200, body: data }))
    .catch((error) => callback({ statusCode: 422, body: error }));
}
