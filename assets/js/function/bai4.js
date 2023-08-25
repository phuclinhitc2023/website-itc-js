// Tinh tong cac phan tu le trong mang

var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,21];
var length = a.length
var sumLe = (arr) => {
    var sum = 0; 
    for(var i = 0 ; i< length ; i++){
        if(arr[i] % 2 != 0){
            sum += arr[i];
        }
    }
    return sum;
}

console.log(`Tong cac so le cua mang la: ${sumLe(a)}`)
// 1+3+5+7+9+11+13+21+25 = 95