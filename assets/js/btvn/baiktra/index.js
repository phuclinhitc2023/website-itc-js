// bai 1:

var learning = 'ITC xin chao, hoc JS co ban cung ITC nhe, JS JS va JS';

// 1.1
console.log(learning.length)

// 1.2

var ketqua1 = learning.indexOf('ITC', 4)
console.log(ketqua1)

// 1.3
var ketqua2 = learning.split(' ')
console.log(ketqua2)

// 1.4
var ketqua3 = learning.replace(/JS/g, 'Javascipt')
console.log(ketqua3)

// 1.5
var ketqua4 = learning.includes('JS')
console.log(ketqua4)


// Bai 2:

var inputType = document.querySelector("#input")
var btnAdd = document.querySelector("#btn")
var btnRes = document.querySelector("#btn-result")
var btnRes2 = document.querySelector("#btn-result2")
var btnRes3 = document.querySelector("#btn-result3")
var btnRes4 = document.querySelector("#btn-result4");


var myString = "";

btnAdd.addEventListener('click', function () {
    myString = inputType.value.toString();
    console.log(`My String = "${myString}"`)
})

// 2.1
btnRes.addEventListener('click', function () {
    standString(myString)
})
function standString(str) {
    let newString = str.trim();
    console.log(`Chuoi sau khi chuan hoa la: "${newString}" `)
}

// 2.2
btnRes2.addEventListener('click', function () {
    lengthStr(myString)
})
function lengthStr(str) {
    var strLenght = str.length;
    console.log(`2.2 Do dai: ${strLenght}`)
}

//2.3
btnRes3.addEventListener('click', function () {
    if (countLetter(myString) == 0) {
        console.log(`2.2.Khong tim thay tu khoa js trong string`);
    } else {
        console.log(`2.2.So lan xuat hien tu khoa js = ${countLetter(myString)}`);
    }
})

var countLetter = (str) => {
    let tempStr = str.split(' ');
    let letter = [];
    let count = 0;
    tempStr.forEach((item, index) => {
        if (tempStr[index] === "js") {
            letter.push(tempStr[index]);
            count++;
        }
    });
    return count;
}

// 2.4
btnRes4.addEventListener('click', function () {
    console.log(`2.3. Chuoi sau khi thay the = "${replaceLetter(myString)}"`);
})

var replaceLetter = (str) => {
    let newStr = str.replace(/js/g, 'Javascript');
    return newStr;
}


// Bai 3:

var number = [1, 2, 9, 12, 7, 20, 99, 60]

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
console.log(`Mang sau khi sap xep tang dan: ${kqnumber1}`)


var kqnumber2 = number.sort(function (item1, item2) {
    if (item1 < item2) {
        return 1
    }
    if (item1 > item2) {
        return -1
    }
    if (item1 == item2) {
        return 0
    }
})
console.log(`Mang sau khi sap xep giam dan: ${kqnumber2}`)

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
        Address: 'Thai Binh'
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
    return person.Address == 'Ha Noi'
})

console.log(kqpersons2)

// 4.3

var kqpersons3 = persons.map(function (item) {
    item.fullName = item.fullName.toUpperCase()
    return item
})

console.log(kqpersons3)

// Bai 5

function Xe(tenXe, hangXe, namSanxuat) {
    this.tenXe = tenXe,
        this.hangXe = hangXe,
        this.namSanxuat = namSanxuat
}

var Xedap = new Xe('Cao cao', 'Viet Nhat', 2000)
var Xehoi = new Xe('Roll-Royce Phantom', 'Roll-royce', 2015)

Xedap.soBanh = 2;
Xehoi.soGhe = 4;

console.log(Xedap)
console.log(Xehoi)

var date = new Date();

var nowYear = date.getFullYear();

Xe.prototype.tinhTuoi = function (a, b) {
    return a - b
}

console.log(Xedap.tinhTuoi(nowYear, Xedap.namSanxuat))
console.log(Xehoi.tinhTuoi(nowYear, Xehoi.namSanxuat))

// Bai 6
// 6.1
var date = new Date()

var today = `Ngay hom nay la: ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
console.log(today)

var btnRandom = document.querySelector(".random")

btnRandom.addEventListener('click', function () {
    alert(testRandom(gift))
})
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
var testRandom = (arr) => {
    var random = Math.floor(Math.random() * arr.length);
    return gift[random]
}