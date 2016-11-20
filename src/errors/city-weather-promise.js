class CityWeatherPromiseError extends Error {
  constructor(options = {}) {
    super();

    this.name = 'CityWeatherPromiseError';
    this.message = options.message;
    this.type = options.type;
    this.errors = options.errors;
  }
}

export default CityWeatherPromiseError;
