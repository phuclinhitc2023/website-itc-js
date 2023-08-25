// var profiles = [
//     'Dang Phuc Linh',
//     18,
//     'Ha Noi',
//     300,
//     2005
// ]
// console.log(profiles)

// toString: chuyen mang ve chuoi
// console.log(profiles.toString())

//Pop: xoa phan tu cuoi cung cua mang va tra ve phan tu da xoa
// console.log(profiles.pop())
// console.log(profiles)

// Push: them 1 hoac nhieu phan tu vao cuoi mang va tra ve chieu dai cua mang
// console.log(profiles.push('Viet Nam', 2005))
// console.log(profiles)

// shift: Xóa đi phần từ đầu mảng và trả về phần tử đã xóa
// console.log(profiles.shift())
// console.log(profiles)

//unshift: them 1 hoac nhieu phan tu vao dau mang
// console.log(profiles.unshift('Viet Nam', 2005, 3000))
// console.log(profiles)

// Splicing(vi tri dat con tro, so phan tu can xoa, phan tu can chen): xoa phan tu bat ki, chen
// console.log(profiles.splice(1,2,'10 diem'))
// console.log(profiles)

//concat: hop nhat cac mang
// var scores = [10, 8, 7]
// console.log(scores.concat(profiles))

// slice(vi tri cat, vi tri dung lai): cắt
// console.log(profiles.slice(0))


var names = [
    {
        id: 1,
        name: 'Dang Phuc Linh',
        score: 1,
        city: 'Ha Noi'
    },
    {
        id: 2,
        name: 'Nguyen Quang Hoc',
        score: 10,
        city: 'Bac Giang'
    },
    {
        id: 3,
        name: 'Vu Thanh Dat',
        score: 8,
        city: 'US'
    },
    {
        id: 4,
        name: 'Nguyen Quang Hieu',
        score: 10,
        city: 'Bac Giang'
    },
    {
        id: 5,
        name: 'Nguyen Quang ',
        score: 8,
        city: 'Bac Giang'
    },
]


// forEach: lap qua cac phan tu trong mang

// names.forEach(function(name){
//     console.log(name)
// })

// every: kiem tra tat ca cac phan tu trong mang co dung voi dieu kien hay ko neu ma dung het thi la true, sai 1 = false
// var isCity = names.every(function(name,index){
//     console.log(index)
//     return name.score === 10;
// })
// console.log(isCity)

// some:
// var isCity = names.some(function(name,index){
//     console.log(index)
//     return name.score === 10;
// })
// console.log(isCity)

// find
// var isCity = names.find(function(name,index){
//     console.log(index)
//     return name.score === 10;
// })
// console.log(isCity)

// filter:

// var isCity = names.filter(function(name,index){
//     console.log(index)
//     return name.score === 10;
// })
// console.log(isCity)