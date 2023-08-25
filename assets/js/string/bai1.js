var inputType = document.querySelector("#input")
var btnAdd = document.querySelector("#btn")
var btnRes = document.querySelector("#btn-result-1")


var myString = "";

btnAdd.addEventListener('click', function () {
    myString = inputType.value.toString();
    console.log(myString)
})

btnRes.addEventListener('click', function () {
    console.log(standString(myString))
})
function standString(str) {
    let newString = str.trim();
    console.log(`Chuoi sau khi chuan hoa la: "${newString}" `)
}