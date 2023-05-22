const request = require('request');

//API endpoint URL
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=sibe';

//function to GET data from URL
const breedfetcher = () => {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.log('Request failed');
    } else if (response.statusCode !== 200) {
      console.log(`Request failed with status code: ${response.statusCode}`);
    } else {
      console.log(body);
    }
  });
};

breedfetcher();