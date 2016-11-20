'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (city) {
  return new Promise(function (resolve, reject) {
    if (typeof city !== 'string') {
      throw new _cityWeatherPromise2.default({
        message: 'Error when initializing CityWeatherPromise.',
        type: 'validation-error',
        errors: [{
          message: 'You must call the constructor using a String.'
        }]
      });
    }

    var cityFormatted = getWordWithoutSomething(city.trim(), ' ', '-');
    var url = '' + BASE_URL + cityFormatted + '&APPID=' + APP_ID;

    _axios2.default.get(url).then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(new _cityWeatherPromise2.default({
        message: 'The city ' + city + ' was not found.',
        type: 'service-error',
        errors: [error.response.data]
      }));
    });
  });
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _cityWeatherPromise = require('./errors/city-weather-promise');

var _cityWeatherPromise2 = _interopRequireDefault(_cityWeatherPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
var APP_ID = '59f807307ebf813df0c1dd3647242945';

function getWordWithoutSomething(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

module.exports = exports['default'];