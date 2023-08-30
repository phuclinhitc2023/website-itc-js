var data = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6];

const noRepeat = (arr) => {
    uniqueArray = arr.filter(function (item, pos) {
        return arr.indexOf(item) == pos;
    });
    return uniqueArray;
};
console.log(noRepeat(data));