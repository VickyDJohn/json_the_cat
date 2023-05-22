const request = require('request');

// API endpoint URL
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search';

// Function to fetch breed data from API
const breedFetcher = (breedName) => {
  const url = `${apiUrl}?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log('Request failed');
    } else if (response.statusCode !== 200) {
      console.log(`Request failed with status code: ${response.statusCode}`);
    } else {
      const data = JSON.parse(body);
      //if there is no data, return breed not found
      if (data.length > 0) {
        console.log(data[0].description);
      } else {
        console.log("Breed not found");
      }
    }
  });
};

//use process.argv to take in beed name as command line argument
const args = process.argv.slice(2);
if (args.length === 0) {
  console.log("Please provide a breed name");
} else {
  breedFetcher(args);
}