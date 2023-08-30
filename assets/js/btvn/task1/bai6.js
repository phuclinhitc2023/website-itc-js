var data6 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 5, 4, 6, 3];

const counts = {};
data6.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
});
console.log(counts);
