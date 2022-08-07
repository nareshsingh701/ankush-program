const num1 = prompt('Enter the fist positive number');
const num2 = prompt('Enter the secund positive number');

function LCM(){
let x = (num1 > num2) ? num1 : num2;

while (true) {
  if (x % num1 == 0 && x % num2 == 0) {
    console.log(`The LCM of ${num1} and ${num2} is ${x}`)
    break;
  }
  x++
}
}
LCM()