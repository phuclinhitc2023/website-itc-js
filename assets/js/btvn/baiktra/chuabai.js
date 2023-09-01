// Bai 1:

var learning = 'ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS';

// 1.1
console.log(learning.length)

// 1.2
var kq1 = learning.indexOf('ITC', 3)
console.log(kq1)

// 1.3 
var kq2 = learning.split(' ')
console.log(kq2)

// 1.4
var kq3 = learning.replace(/JS/g, 'Javascipt')
console.log(kq3)

//1.5 
var kq4 = learning.includes('JS')
console.log(kq4)

//Bai 2:

var inputType = document.querySelector('#input')
var btnAdd = document.querySelector('#btn')
var btnRes = document.querySelector('#btn-result')
var btnRes2 = document.querySelector('#btn-result2')
var btnRes3 = document.querySelector('#btn-result3')
var btnRes4 = document.querySelector('#btn-result4')


var myString = "";

btnAdd.addEventListener('click', function () {
    myString = inputType.value.toString();
    console.log(`My string: ${myString}`)
})

// 2.1
btnRes.addEventListener('click', function () {
    standString(myString)
})
function standString(str) {
    let newString = str.trim();
    console.log(`Chuoi sau khi chuan hoa la: "${newString}"`)
}

// 2.2
btnRes2.addEventListener('click', function () {
    lengthString(myString)
})
function lengthString(str) {
    var lengthStr = str.length;
    console.log(`Chieu dai cua chuoi la: ${lengthStr}`)
}

// 2.3
btnRes3.addEventListener('click', function () {
    if (countStr(myString) == 0) {
        console.log("Khong tim thay tu itc o trong chuoi")
    }
    else {
        console.log(`So lan xuat hien la: ${countStr(myString)}`)
    }
})
var countStr = (str) => {
    let tempStr = str.split(' ')
    let letter = [];
    let count = 0;
    tempStr.forEach((item, index) => {
        if (tempStr[index] === "itc") {
            letter.push(tempStr[index])
            count++;
        }
    });
    return count;
}

// 2.4
btnRes4.addEventListener('click', function () {
    console.log(`Chuoi sau khi thay the la ${replaceString(myString)}`)
})
var replaceString = (str) => {
    let newStr = str.replace(/itc/g, 'ITC')
    return newStr
}

// Bai 3

var number = [1, 2, 5, 6, 2, 120, 12, 4, 99, 8];

var kqnumber1 = number.sort(function (item1, item2) {
    if (item1 > item2) {
        return 1
    }
    if (item1 < item2) {
        return -1
    }
    if (item1 == item2) {
        return 0
    }
})

console.log(kqnumber1)


// Bai 4: 
var persons = [
    {
        fullName: 'Tran Anh Khoa',
        age: 18,
        Address: 'Ha Noi'
    },
    {
        fullName: 'Nguyen Quang Hoc',
        age: 21,
        Address: 'Bac Giang'
    },
    {
        fullName: 'Vu Thanh Dat',
        age: 20,
        Address: 'Ha Noi'
    },
    {
        fullName: 'Dang Phuc Linh',
        age: 19,
        Address: 'Ha Noi'
    },
]

// 4.1

var kqpersons1 = persons.sort(function (item1, item2) {
    if (item1.age > item2.age) {
        return 1
    }
    if (item1.age < item2.age) {
        return -1
    }
    if (item1.age == item2.age) {
        return 0
    }
})

console.log(kqpersons1)

// 4.2

var kqpersons2 = persons.filter(function (person, index) {
    return person.Address == "Ha Noi"
})

console.log(kqpersons2)

// 4.3

var kqpersons3 = persons.map(function (item) {
    item.fullName = item.fullName.toUpperCase()
    return item
})

console.log(kqpersons3)

// Bai 5:

function Hocsinh(firstName, lastName, age, address, score) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age,
        this.address = address,
        this.score = score
}

var Nam = new Hocsinh('Nguyen', 'Nam', 20, 'Ha Noi', 10)
var Hoa = new Hocsinh('Nguyen', 'Hoa', 25, 'Ha Noi', 6)
var Mai = new Hocsinh('Nguyen', 'Mai', 23, 'Ha Noi', 7)
var Dung = new Hocsinh('Nguyen', 'Dung', 19, 'Bac Ninh', 2)
var Hanh = new Hocsinh('Nguyen', 'Hanh', 30, 'Ha Noi', 1)

Nam.className = 'DHTI15A2HN'

Nam.getfullName = function () {
    return `${this.firstName} ${this.lastName}`
}

console.log(Nam)
console.log(Hoa)
console.log(Mai)
console.log(Dung)
console.log(Hanh)


// Bai 6
// 6.1
var date = new Date();
var today = `Ngay hom nay la: ${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()}`
console.log(today)

//6.2
var gift = [
    'Bạn đen lắm',
    '10 coin',
    '20 coin',
    '30 coin',
    'Giải khuyến khích',
    'Giải nhì',
    'Giải nhất',
    'Giải đặc biệt (^.^)'
];

var btnRandom = document.querySelector('.random')
btnRandom.addEventListener('click',function(){
    alert(testRandom(gift))
})
var testRandom = (arr) => {
    var random = Math.floor(Math.random() * arr.length)
    return gift[random]
}