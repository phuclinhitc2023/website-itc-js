var check = (n) => {
    var snt = true;
    if(n<2){
        snt = false;
    }
    else {
        for(var i = 2 ; i < n-1 ; i++){
            if(n%i == 0) {
                snt = false
                break;
            }
        }
    }
    if(snt == true){
        console.log(`So nguyen to la: ${n}`)
    }
    else{
        console.log(`${n} khong phai la nguyen to`)
    }
}

console.log(check(20))