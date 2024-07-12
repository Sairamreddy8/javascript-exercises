const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp-32)*5/9;
  celsiusTemp = Math.round(celsiusTemp*10)/10;
  return celsiusTemp
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = (9*celsiusTemp/5) + 32;
  fahrenheitTemp = Math.round(fahrenheitTemp*10)/10;
  return fahrenheitTemp
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
