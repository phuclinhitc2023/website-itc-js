var list1 = [3, 6, 7, 9, 5];
var list2 = [3, 5, 7, 8, 6, 6, 7];

const sumArr = (arr1, arr2) => {
    return arr1.reduce((a, b) => a + b, 0) + arr2.reduce((a, b) => a + b, 0);
};

console.log(sumArr(list1, list2));