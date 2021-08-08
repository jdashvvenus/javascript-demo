// kelvin calculator

const measureKelvin = function () {
const measurement = {
    type: 'temp',
    unit: 'Celsius',
    value: Number(prompt('Degrees Celsius')), 
    };

  console.table(measurement);
  //console.log
  //console.warn
  //console.error

  const kelvin = measurement.value + 273;
  return `${measurement.value} ${measurement.unit} is equal to ${kelvin} Kelvin`;

};
console.log(measureKelvin());
