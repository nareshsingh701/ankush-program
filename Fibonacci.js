const a=prompt("Enter the number of temps:");

function Sequence(){

let b=0,c=1,d;
console.log('Fibonacci series:');

for(let i=1;i<=a;i++){
console.log(b);
d=b+c;
b=c;
c=d;
}
}
Sequence()