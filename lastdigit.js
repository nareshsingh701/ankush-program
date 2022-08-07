const a = prompt('Enter a fist intiger');
const b = prompt('Enter a secund intiger');
const c = prompt('Enter a thrid intiger');

function lastdigit(){

let result1 = a % 10;
let result2 = b % 10;
let result3 = c % 10;

if (result1 == result2 && result1 == result3) {
console.log(`${a}, ${b}, and ${c} have the sum last digit`)
}else{
console.log(`${a}, ${b}, and ${c} have difult sum last digit`)
}
}
lastdigit()