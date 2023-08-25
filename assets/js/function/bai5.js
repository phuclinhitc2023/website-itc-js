var sumInfi = (...number) => {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        sum += number[i];
    }
    return sum;
}

console.log(`Tong so khong gioi han la: ${sumInfi(1,2,3,4,5,6)}`)