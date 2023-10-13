const convertToCelsius = function(fahrenheit) {
 let celsius = ( (fahrenheit-32) * (5/9) )
  if (Number.isInteger(celsius)) {
    return parseFloat(celsius)
  } else 
  celsius = celsius.toFixed(1)
  return parseFloat(celsius)
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = ( (celsius * (9/5)) + 32 )
  if (Number.isInteger(fahrenheit)) {
    return parseFloat(fahrenheit)
  } else 
  fahrenheit = fahrenheit.toFixed(1)
  return parseFloat(fahrenheit)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
