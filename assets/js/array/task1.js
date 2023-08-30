// bai 2:
var list1 = [3, 6, 7, 9, 5];
var list2 = [3, 5, 7, 8, 6, 6, 7];

const sumArr = (arr1, arr2) => {
	return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
};

console.log(sumArr(list1, list2));

// Bai 3:
var data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6];

const noRepeat = (arr) => {
	uniqueArray = arr.filter(function (item, pos) {
		return arr.indexOf(item) == pos;
	});
	return uniqueArray;
};
console.log(noRepeat(data));

// Bai 4: 
var hocSinh = [
	{
		ten: 'huy',
		khoi: 'A',
		diem: {
			toan: 7,
			van: 5,
			anh: 5
		}
	},
	{
		ten: 'lam',
		khoi: 'B',
		diem: {
			toan: 7,
			van: 7,
			anh: 5
		}
	},
	{
		ten: 'tung',
		khoi: 'C',
		diem: {
			toan: 7,
			van: 4,
			anh: 7
		}
	}
]

var khoiThi = [
	{
		khoi: 'A',
		heSo: {
			toan: 2,
			van: 1,
			anh: 1
		},
		diemSan: 25
	},
	{
		khoi: 'B',
		heSo: {
			toan: 2,
			van: 1,
			anh: 2
		},
		diemSan: 24
	},
	{
		khoi: 'C',
		heSo: {
			toan: 2,
			van: 2,
			anh: 1
		},
		diemSan: 20
	}
]


// Bai 6:
var data6 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6, 3];

const counts = {};
data6.forEach(function (x) {
	counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
