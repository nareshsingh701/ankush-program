const num = prompt("Enter the positive Number");

function number() {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  console.log("The sum off the number ", sum)
}
number()