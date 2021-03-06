import axios from 'axios';
import CityWeatherPromiseError from './errors/city-weather-promise';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
const APP_ID = '59f807307ebf813df0c1dd3647242945';

function getWordWithoutSomething(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

export default function(city) {
  return new Promise((resolve, reject) => {
    if (typeof city !== 'string') {
      throw new CityWeatherPromiseError({
        message: 'Error when initializing CityWeatherPromise.',
        type: 'validation-error',
        errors: [{
          message: 'You must call the constructor using a String.'
        }]
      });
    }

    let cityFormatted = getWordWithoutSomething(city.trim(), ' ', '-');
    let url = `${BASE_URL}${cityFormatted}&APPID=${APP_ID}`;

    axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(new CityWeatherPromiseError({
          message: `The city ${city} was not found.`,
          type: 'service-error',
          errors: [error.response.data]
        }));
      });
  });
}
