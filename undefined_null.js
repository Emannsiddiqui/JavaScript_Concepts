//undefined
//1. variable with no initialization
let a; //no initialization
console.log(a);
//2. print the object property that does not exist
let obj = {name:"Eman", 
    city: "Karachi"};
console.log(obj.age);
//3. function parameter are not passed
function callName(Name){
    console.log("My name is " + Name);
}
callName(); 
//4. function without a return statement
function greet(){
    console.log("Hello");
}
let res = greet(); //o/p: Hello
console.log(res); //undefined
//5.array elements not initialized
let arr = [1,2, ,4];
console.log(arr[2]);
//6. array oyut of bound
let arr1 = [1,2,4];
console.log(arr1[4]);

//null
let name = null;
console.log(name);