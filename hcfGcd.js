const x = prompt('Enter the fist positive number ');
const y = prompt('Enter the secund positive number ');

function Hcf(){

let z;
for (let i = 1; i <= x && i <= y; i++) {
  if (x % i == 0 && y % i == 0) {
    z = i;
  }
}
console.log(`HFC of ${x} and ${y} is ${z}.`)
}
Hcf()