let weather = require('../dist/city-weather-promise');

weather('Guarapuava')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

weather('Rio de Janeiro')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
