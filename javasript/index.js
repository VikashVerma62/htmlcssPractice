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



function getMyName(firstName,lastName){
   let fullName=firstName+" "+lastName;
   return fullName;

   //unrechable code or statement

   let a=10;
   b=20;

}

let name2=getMyName("vikash","verma");

let getExp=(x,y)=>{

   let ans=x**y;
   return ans;

}
console.log(getExp(2,10));


let arr=[1,2,"love",true,];
arr.push("vikash");
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(1);
console.log(arr);
arr.push(5)
arr.push(6);
console.log(arr);
console.log(arr.slice(2,5));

console.log(arr.splice(1,2,'kunal'));
console.log(arr)
let arr1=[10,20,30];
let ans=arr1.map((number)=>{
   return number*number;
})
console.log(ans);



let arr2=[1,2,"hello","wow"];
let ans1=arr.filter((value)=>{
if(typeof(value)==='number'){
   return true;
}
else{
   return false;
}
})

console.log(ans1);


let arr3=[7,5,4,3,2,1];
arr3.sort();
console.log(arr3)
console.log(arr3.indexOf(3))
arr3.forEach((number,index)=>{
   console.log("Number",number ,"index",index);
})

let arr4=[1,2,3,4,5]
let letSum=(arr4)=>{
   let sum=0;
  let len=arr4.length;
  for(let i=0; i<len; i++){
   sum=sum+i;
   return sum;
  }
}
totalsum=letSum(arr4);
console.log(letSum);