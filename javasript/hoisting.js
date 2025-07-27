var age;
// in case of variable only the declaration is shift at the top not the assigment is shifted at the top




//function hoisting means shift the function at the top of the scope before compilation of the program
// if we call this function at the top of the code then also it is working 
// here the whole function is shifted at the top
function sayMyName(myName){
    console.log(myName)
}
sayMyName("vikash");

var age=25;
console.log(age);

// in case of function expression
// in case of function expression it is not working the function hoisting and gives an reference errror which means the function can not access before the intialization.
// sum(4,5);
// let sum=function( a,  b){
// console.log(a+b);
// }




function greet( greet1){
    console.log("hello jee kese ho sare");
    greet1();

}
function greet1(){
    console.log("hyyy hello hiii");
}
greet(greet1);



function solve(number){
    return function(){
        return number*number;
    }
}

let ans=solve(5);
let finalAns=ans(10);
console.log(finalAns)

const arr=[
    function sum(a,b){
        return a+b;
    },
    function sub(a,b){
        return a-b;
    },
    function mul(a,b){
        return a*b;
    },
    function div(a,b){
        return a/b;
    }
]

let first=arr[2];
let ans1=first(5,10);
console.log(ans1)