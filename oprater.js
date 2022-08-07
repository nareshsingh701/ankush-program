const oprater=prompt('Enter the oprater -,+,*, and /');
const a=prompt("Enter the fistNumber");
const b=prompt("Enter the secundNumber");
let result;
 
 function add(){
 
if(oprater== '+'){
result=a+b;
}else if(oprater== '-'){
result=a-b;
}else if(oprater == '*'){
result=a*b;
}else{
result=a/b;
}
}
console.log(`${a} ${oprater} ${b} = ${result}`)

add()