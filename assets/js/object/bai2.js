function Xe(tenXe, hangXe, namSanxuat){
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

Xe.prototype.tinhTuoi = function(a,b) {
    return a-b
}

console.log(Xedap.tinhTuoi(nowYear, Xedap.namSanxuat))
console.log(Xehoi.tinhTuoi(nowYear, Xehoi.namSanxuat))

