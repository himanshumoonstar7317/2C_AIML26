let first = "SHIVA"
let last = "KUMARI"
console.log("My Name is " + first + " " + last);
console.log(`My Name is ${first} ${last}`);
let fullName = `My Name is ${first} ${last}`;
function fullname(first, last) {
    return `My Name is ${first} ${last}`;
}
console.log(fullName);
console.log(fullname(first, last));