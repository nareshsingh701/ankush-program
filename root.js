const a = prompt("Enter the value of a");
const b = prompt("Enter the value of b");
const c = prompt("Enter the value of c");

function data(){


let route1, route2;
const d = b * b - 4 * a * c;

if (d > 0) {
  route1 = -b + (Math.sqrt(d) / (2 * a))
  route1 = -b - (Math.sqrt(d) / (2 * a))
  console.log(`The value of ${route1} & ${route2}`)
}
if (d == 0) {
  route1 = route2 = -b / (2 * a);
  console.log(`The value of ${route1}& ${route2}`)

}
}
data()