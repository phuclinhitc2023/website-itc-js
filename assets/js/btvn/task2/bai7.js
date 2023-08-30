// Unit Math: Bai 7
// 7.1: Random number
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));

// 7.2:
var number = 7.434345;
const roundNumber = Math.round(number);
const ceilNumber = Math.ceil(number);
const floorNumber = Math.floor(number);

// 7.3:
function roundToTwoDecimalPlaces(num) {
    return Math.round(num * 100) / 100;
}

console.log(roundToTwoDecimalPlaces(7.434345));
// 7.4:
const num1 = "8";
const num2 = "5";
const sumStrNumber = parseInt(num1) + parseInt(num2);
console.log(sumStrNumber);

// 7.5:
console.log(Math.pow(2, 10));