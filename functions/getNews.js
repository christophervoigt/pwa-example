const fetch = require("node-fetch");

const api_key = '96eb5c7142df4063b326c651073940ab';
const api = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${api_key}`;

exports.handler = function (event, context, callback) {
  return fetch(api, { headers: { "Accept": "application/json" } })
    .then(function (response) { return response.json() })
    .then(function (data) {
      return callback(null, {
        statusCode: 200,
        body: data,
      })
    })
    .catch(function (error) { return ({ statusCode: 422, body: String(error) }) });
};