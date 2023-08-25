

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

function Calcuavg(arr) {


    let totalArr = arr.reduce(function (total, item, index) {
        return total += item
    }, 0)
    return totalArr / arr.length

}

btnCalculator.addEventListener('click', function () {
    var avg = Calcuavg(array);
    console.log(avg)
})