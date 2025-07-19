//  var a=25;
//  console.log(a);

 function name(){
    var a=40;
    console.log(a);
 }
//  name();
//  console.log(a); //this is function scope variable other than function it behave like a global variaable

{
 let a=10;
 console.log(a);
 a=40; //reassingment is possible
//  let a=10 redeclaration is not possible in javascript to let keyword
}
//console.log(a) //not possible outside the block


const b=34;
// console.log(b);


let marks=50;
// console.log(marks);
marks="babbar";
// console.log(marks);



let c; //this gives an undefind value
console.log(c);
typeof(c);


for(let i=1; i<=10; i++){
   // console.log("babbar")
}
for(let i=1; i<=10; i++){
   // console.log(i);
}
for(let i=5; i>=1; i--){
   // console.log(i);
}



let op1='hindi ';
let op2='english ';
let op3=op1 +op2;
// console.log(op3)
console.log(`${op1} ${op2}`)

// console.log(op1.length);

console.log(op1.toLocaleUpperCase());


let name1='babbar';

// console.log(name1.substring(2));



function myName(){
   console.log("hello world");

}
// myName();


function couting(){
   for(let i=1; i<=100; i++){
      console.log(i);
   }
}
// couting();

function printNumber(num){
console.log("number is " +num )
}
printNumber(5);




function avg(num1,num2){
   avg=num1+num2/2;
   console.log(avg);
}
avg(3,7);



function getSum(a,b,c){
let sum=a+b+c;
return sum;
}

let sum=getSum(1,2,3);
console.log(sum);