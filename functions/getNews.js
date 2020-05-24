import fetch from "node-fetch";

const API_ENDPOINT = 'https://newsapi.org/v2/top-headlines?country=de&apiKey=96eb5c7142df4063b326c651073940ab';

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => ({ statusCode: 200, body: data }))
    .catch((error) => ({ statusCode: 422, body: error }));
}
