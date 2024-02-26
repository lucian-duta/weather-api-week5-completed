// Import the faker object from the "@faker-js/faker" package.
// Faker is a library used to easily generate fake (but realistic) data for various purposes.
import { faker } from '@faker-js/faker';

// Define and export a function named `generateLondonWeatherData`.
// This function does not take any parameters and returns an object of type WeatherData.
// The purpose of this function is to simulate weather data for London.
export const generateLondonWeatherData = (): WeatherData => {
  // Inside the function, create an object named `generatedWeatherData` with random weather conditions.
  // faker.number.int is a method provided by faker to generate random integers within a specified range.
  const generatedWeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }), // Random temperature between -15 and 30 degrees.
    humidity: faker.number.int({ min: 79, max: 86 }), // Random humidity percentage between 79% and 86%.
    wind: faker.number.int({ min: 2, max: 78 }), // Random wind speed between 2 and 78 (units not specified, but typically km/h or mph).
    rain: faker.number.int({ min: 65, max: 75 }), // Random rain probability between 65% and 75%.
  };

  // Return the generated weather data object.
  return generatedWeatherData;
};

// Define and export another function named `generateDublinWeatherData` with similar functionality.
// This function simulates weather data for Dublin and also returns an object of type WeatherData.
export const generateDublinWeatherData = (): WeatherData => {
  // The structure and method of generating data are the same as for `generateLondonWeatherData`.
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }), // Temperature in the same range.
    humidity: faker.number.int({ min: 79, max: 86 }), // Humidity in the same range.
    wind: faker.number.int({ min: 2, max: 78 }), // Wind speed in the same range.
    rain: faker.number.int({ min: 65, max: 75 }), // Rain probability in the same range.
  };

  // Return the generated weather data object for Dublin.
  return generatedWeatherData;
};
