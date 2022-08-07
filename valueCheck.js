const num1=prompt("Enter The number one ");
const num2=prompt("Enter The number Two ");
const num3=prompt("Enter The number Three ");
let data;
function number(){
if(num1>=num2 && num1 >=num3){
data=num1;
}else if(num2>=num1 && num2 >=num3){
data=num2;
}else{
data=num3;
}
console.log("The largest is " +data)
}
number()