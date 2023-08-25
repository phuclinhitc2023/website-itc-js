var input = document.querySelector('#input');
var btnAdd = document.querySelector('#btn');
var btnResult = document.querySelector('#btn-result');

var array = [];
// Dinh dang du lieu
function convert(a) {
    a = parseInt(a);
    return a;
}

function findMax(arr) {
    if (arr.length == 0) {
        alert("Mang khong co gia tri")
    }
    else {
        let max = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        alert('So lon nhat la: ' + max)
    }
}

function findMin(arr) {
    if (arr.length == 0) {
        alert("Mang khong co gia tri")
    }
    else {
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        alert('So nho nhat la: ' + min)
    }
}

btnAdd.addEventListener('click', function () {
    let number = convert(input.value);
    array.push(number);
    input.value = "";
    console.log(array)
})

btnResult.addEventListener("click", function () {
    findMax(array);
    findMin(array);
})
