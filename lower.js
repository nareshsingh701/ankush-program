const a = prompt("Enter lower Number");
const b = prompt("Enter hight Number");

function lower() {
  console.log(`The prime number betbeen ${a}and ${b}`)
  for (i = a; i <= b; i++) {
    let c = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        c = 1;
        break;
      }
    }
    if (i > 1 && c == 0) {
      console.log(i)
    }
  }
}

lower()