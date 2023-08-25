var Expres = (n) =>{
    var sum = 0;
    for(var i =1; i<=n; i++){
        sum += i/n;
    }
    return sum;
}

console.log(`Tong cac gia la: ${Expres(5)}`)
// 1/5 +2/5 + 3/5 +4/5 +5/5 = 3
