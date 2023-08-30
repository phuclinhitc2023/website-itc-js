// Bai1:
var currentdate = new Date();
var datetime = `Last Sync: ${currentdate.toLocaleDateString()}`;

console.log(datetime);

// bai2:
const arr1 = [1, 2, 3, 5, 7];
const arr2 = [7, 5, 3, 5, 7, 9];
console.log(`Max value is: ${Math.max(...arr1, ...arr2)}`);

// Bai 4:
var sinhnhat = "5/10/2000";

//a.
const nowDate = new Date().toLocaleDateString();
function calculateAge(birthDate, otherDate) {
	birthDate = new Date(birthDate);
	otherDate = new Date(otherDate);

	var years = otherDate.getFullYear() - birthDate.getFullYear();

	if (
		otherDate.getMonth() < birthDate.getMonth() ||
		(otherDate.getMonth() == birthDate.getMonth() &&
			otherDate.getDate() < birthDate.getDate())
	) {
		years--;
	}

	return years;
}
console.log(calculateAge(sinhnhat, nowDate));

// b.
var today, bday, diff, days;
const birthDate = new Date(sinhnhat);
today = new Date();
bday = new Date(
	today.getFullYear(),
	birthDate.getMonth() - 1,
	birthDate.getDate()
);
if (today.getTime() > bday.getTime()) {
	bday.setFullYear(bday.getFullYear() + 1);
}
diff = bday.getTime() - today.getTime();
days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days + " days until Niet's birthday!");


// Bai 5:
// 5.1:
let today2 = new Date();
const firstDay = new Date(
	today2.getFullYear(),
	today2.getMonth(),
	today2.getDate() - (today2.getDay() - 1)
);
console.log(firstDay)
// 5.2:
const lastDay = new Date(
	today2.getFullYear(),
	today2.getMonth(),
	today2.getDate() + (7 - (today2.getDay() - 1))
);
// 5.5:

const daysInMonth = new Date(
	today2.getFullYear(),
	today2.getMonth() + 1,
	0
).getDate();

// Bai 6

// 6.1, 
var phucBirthday = '26-11-1992';
var cuongBirthday = '27-11-1994';

// 
// var arrBirthday = phucBirthday.split('-');
// phucBirthday = arrBirthday[2] + '-' + arrBirthday[1] + '-' + arrBirthday[0]
// console.log(phucBirthday)

// 6.2, chuyen ve object date

function convertDate(stringDate) {
	var arrBirthday2 = stringDate.split('-');
	stringDate = arrBirthday2[2] + '-' + arrBirthday2[1] + '-' + arrBirthday2[0]
	var date = new Date(stringDate)
	return date;
}

phucBirthday = convertDate(phucBirthday)
cuongBirthday = convertDate(cuongBirthday)

console.log(phucBirthday)
console.log(cuongBirthday)

// 6.3, so sanh

if (phucBirthday > cuongBirthday) {
	console.log('Phuc nho tuoi hon cuong')
}
else {
	console.log('Cuong nho tuoi hon Phuc')
}

// d,

var date100 = phucBirthday.getDate() + 100;
phucBirthday.setDate(date100)
console.log(`Ngay sau 100 ngay: ${phucBirthday}`)

var thutrongtuan = phucBirthday.getDay();
switch (thutrongtuan) {
	case 0:
		console.log('Chu nhat');
		break;
	case 1:
		console.log('Thu Hai');
		break;
	case 2:
		console.log('Thu ba');
		break;
	case 3:
		console.log('Thu tu');
		break;
	case 4:
		console.log('Thu nam');
		break;
	case 5:
		console.log('Thu sau');
		break;
	case 6:
		console.log('Thu bay');
		break;
}

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