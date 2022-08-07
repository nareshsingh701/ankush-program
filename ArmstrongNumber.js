const low = prompt("Enter a positive low value:");
const hight = prompt("Enter a positive hight value:");

function data() {

  console.log('Armstrong Number');
  for (let i = low; i <= hight; i++) {
    let a = i.toString().length;
    let sum = 0;
    let temp = i;

    while (temp > 0) {
      let b = temp % 10;
      sum += b ** a;
      temp = parseInt(temp / 10);
    }
    if (sum == i) {
      console.log(i)
    }
  }
}
data()