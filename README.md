City Weather Promise
============

![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![GitHub Stars](https://img.shields.io/github/stars/LeoNero/city-weather-promise.svg?style=flat-square)](https://github.com/LeoNero/city-weather-promise/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/LeoNero/city-weather-promise.svg?style=flat-square)](https://github.com/LeoNero/city-weather-promise/issues) [![Current Version](https://img.shields.io/badge/version-1.0-green.svg?style=flat-square)](https://github.com/LeoNero/city-weather-promise)

Check meteorological info from some city

* [Getting started](#start)
* [Usage](#usage)
* [License](#license)

## <a name="start"></a>Getting started

### Setup the project

* Install from npm

        $ npm install city-weather-promise --save


## <a name="usage"></a>Usage
``` js
'use strict'
const weather = require('city-weather-promise');

weather('Rio de Janeiro')
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

####Successful response
```
{ coord: { lon: -43.21, lat: -22.9 },
  weather:
   [ { id: 801,
       main: 'Clouds',
       description: 'few clouds',
       icon: '02d' } ],
  base: 'stations',
  main:
   { temp: 297.35,
     pressure: 1015,
     humidity: 53,
     temp_min: 296.15,
     temp_max: 298.15 },
  visibility: 10000,
  wind: { speed: 6.2, deg: 160 },
  clouds: { all: 20 },
  dt: 1479664800,
  sys:
   { type: 1,
     id: 4565,
     message: 0.3571,
     country: 'BR',
     sunrise: 1479628768,
     sunset: 1479676699 },
  id: 3451190,
  name: 'Rio de Janeiro',
  cod: 200 }
```

## <a name="license"></a>License

Copyright (c) 2016 LeoNero

Licensed under the MIT license (see LICENSE file)
=======
