const fetch = require("node-fetch");

const api_key = '96eb5c7142df4063b326c651073940ab';
const api = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${api_key}`;

exports.handler = async (event, context) => {
  return fetch(api, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};