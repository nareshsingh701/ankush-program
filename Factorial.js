const num = prompt("Enter the positive Number");

function Factorial(){
if (num < 0) {
  console.log("Error! factorial for nagative number is nat assex ")
  }
  else if (num === 0) {
    console.log(`The factorial of ${num} is 1`)
  } else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}`)
  } 
  }
  Factorial()