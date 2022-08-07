const a = prompt("Enter an integer:");

function tabal(){
for (let i = 1; i <= 10; i++) {
  const b = i * a;
  console.log(`${a} * ${i} = ${b}`);
}
}
tabal()