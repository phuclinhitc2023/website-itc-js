// Bai 4:
var sinhnhat = "5/10/2000";

//a.
const nowDate = new Date().toLocaleDateString();
function calculateAge(birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date(otherDate);

    var years = otherDate.getFullYear() - birthDate.getFullYear();

    if (
        otherDate.getMonth() < birthDate.getMonth() ||
        (otherDate.getMonth() == birthDate.getMonth() &&
            otherDate.getDate() < birthDate.getDate())
    ) {
        years--;
    }

    return years;
}
// console.log(calculateAge(sinhnhat, nowDate));

// b.
var today, bday, diff, days;
const birthDate = new Date(sinhnhat);
today = new Date();
bday = new Date(
    today.getFullYear(),
    birthDate.getMonth() - 1,
    birthDate.getDate()
);
if (today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear() + 1);
}
diff = bday.getTime() - today.getTime();
days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days + " days until Niet's birthday!");
