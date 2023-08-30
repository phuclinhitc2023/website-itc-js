// Bai 6

// 6.1, 
var phucBirthday = '26-11-1992';
var cuongBirthday = '27-11-1994';


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
