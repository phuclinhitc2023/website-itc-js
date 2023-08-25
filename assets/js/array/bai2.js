var input = document.querySelector("#input");
var btnAdd = document.querySelector("#btn-add");
var btnCalculator = document.querySelector("#btn-calculator");

var array = [];
function convert(a) {
    a = parseInt(a)
    return a
}
btnAdd.addEventListener('click', function () {
    let number = convert(input.value)
    array.push(number)
    input.value = ""
    console.log(array)
})



// for each
function findIndexMax(arr) {
    let max = arr[0]
    let indexMax = 0
    arr.forEach(function (item, index) {
        if (item > max) {
            max = item
            indexMax = index
        }
    })
    return indexMax
}

btnCalculator.addEventListener('click', function () {
    let indexMax = findIndexMax(array)
    alert("chỉ số lớn nhất: " + indexMax)
})