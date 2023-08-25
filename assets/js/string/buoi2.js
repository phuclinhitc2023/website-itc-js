// String: chuỗi

var myString = "Hoc JS cung ITC JS nhe JS      ";
console.log( myString)

// Kiểm tra độ dài của chuỗi
console.log(myString.length)

// Nối chuỗi
var firstName = 'Dang';
var lastName = 'Linh';
console.log('Toi la: ' + firstName + ' ' + lastName)
// Template string
console.log(`Toi la: ${firstName} ${lastName}`)

// Index of: (từ khóa tìm kiếm, vị trí bắt đầu tìm kiếm)
console.log(myString.lastIndexOf('JS', 20))

// Cut string ( vị trí bắt đầu, vị trí cuối cùng)
console.log(myString.slice(0))

// Replace (tìm nội dung JS đầu tiên, nội dung thay)
console.log(myString.replace('JS', 'Javascript'))
// Replace (tìm tất cả nội dung JS, nội dung thay)
console.log(myString.replace(/JS/g, 'Javascript'))

// Convert to upper case: in hoa chuoi 
//  Convert to lower case: viet thuong chuoi
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

// Trim: Chuẩn hóa chuỗi
console.log(myString.trim())
console.log(myString.trim().length)

// Split: cắt 1 chuỗi thành 1 array
var nameClass = 'TINA1, TINA2, TINA3';
console.log(nameClass.split(', '))

// charAt
console.log(myString.charAt(5))
