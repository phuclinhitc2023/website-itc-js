// Khởi tạo object
// key : value
// var myInfo = {
//     firstName: 'Linh',
//     lastName: 'Dang',
//     age: 18,
//     address: 'Ha Noi',
//     getFullname: function () {
//         return `${this.lastName} ${this.firstName}`
//     }
// }

// myInfo.email = 'Danglinh@gmail.com'

// delete myInfo.age

// console.log(myInfo)

// Object constructor: Xaay dung doi tuong

// function Member(firstName, lastName, uid) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.uid = uid,
//     this.getFullname = function(){
//         return `${this.lastName} ${this.firstName}`
//     }
// }


// var admin = new Member('Linh', 'Dang', 1)
// var user = new Member('Huong', 'Nguyen', 1)

// Thêm thuộc tính cho đối tượng
// admin.title = 'Day la admin'
// user.content = 'Toi la user'


// Object prototype

// Member.prototype.className = 'DHTI'
// Member.prototype.getUid = function (){
//     return this.uid
// }
// console.log(admin.getUid())
// console.log(user)

// Doi tuong Date

var date = new Date()

var day = date.getDay();
var month = date.getMonth() + 1;
var year = date.getFullYear()
console.log(day)