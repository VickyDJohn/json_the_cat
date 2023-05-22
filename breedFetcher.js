const request = require('request');

// API endpoint URL
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

exports.fetchBreedDescription = (breedName, callback) => {
  const url = `${apiUrl}?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else if (response.statusCode !== 200) {
      callback(`Request failed with status code: ${response.statusCode}`, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        callback(null, data[0].description);
      } else {
        callback('Breed not found', null);
      }
    }
  });
};