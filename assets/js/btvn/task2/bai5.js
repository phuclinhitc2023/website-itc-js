// Bai 5:
// 5.1:
let today2 = new Date();
const firstDay = new Date(
    today2.getFullYear(),
    today2.getMonth(),
    today2.getDate() - (today2.getDay() - 1)
);
console.log(firstDay)
// 5.2:
const lastDay = new Date(
    today2.getFullYear(),
    today2.getMonth(),
    today2.getDate() + (7 - (today2.getDay() - 1))
);
// 5.5:

const daysInMonth = new Date(
    today2.getFullYear(),
    today2.getMonth() + 1,
    0
).getDate();
