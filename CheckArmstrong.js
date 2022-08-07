const num = prompt("Enter a three-diget positive integer ");

function Armstrong(){

let sum = 0;
let temp = num;
while (temp > 0) {
  let a = temp % 10;
  sum += a * a * a;
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log(`${num} is an Armstrong number`)
} else {
  console.log(`${num} is an not  Armstrong number`)
}
}
Armstrong()