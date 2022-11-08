// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 poundtr

converButton = document.getElementById("convertbtn");
meterLable = document.getElementById("meter");
volumeLable = document.getElementById("volume");
massLable = document.getElementById("mass");
inputNumber = document.getElementById("input-number");

function converter(input) {
  conFeet = (input * 3.281).toFixed(3);
  conMeter = (input / 3.281).toFixed(3);
  conLiters = (input / 0.264).toFixed(3);
  conGallons = (input * 0.264).toFixed(3);
  conKilos = (input * 2.204).toFixed(3);
  conPounds = (input / 2.204).toFixed(3);
  return {
    feets: conFeet,
    meters: conMeter,
    liters: conLiters,
    gallons: conGallons,
    kilos: conKilos,
    pounds: conPounds,
  };
}

converButton.addEventListener("click", function () {
  input = inputNumber.value;
  let result = converter(input);

  convertedFeet = result.feets;
  convertedMeter = result.meters;
  convertedgallons = result.gallons;
  convertedliters = result.liters;
  convertedkilos = result.kilos;
  convertedpounds = result.pounds;

  meterLable.innerHTML = `${input} meters = ${convertedFeet} feet | ${input} feet = ${convertedMeter} meters`;
  volumeLable.innerHTML = `${input} liters = ${convertedgallons} gallons | ${input} gallons = ${convertedliters} liters`;
  massLable.innerHTML = `${input} kilos = ${convertedkilos} pounds | ${input} pounds = ${convertedpounds} kilos`;
});
