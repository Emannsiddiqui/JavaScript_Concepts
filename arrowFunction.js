//simple arrow func
let greet = () => {
    console.log("Hello");
}
greet();

//parameterized arrow func
let sum = (a,b) => {
    return a + b;
}
console.log(sum(1,2));

//implicit return arrow func
let multiply = (a,b) => a * b;
console.log(multiply(4,5));

//single parameter arrow func
let sq = (x) => x*x;
console.log(sq(3));

//non-parameterized
let message = () => "Hello World!";
console.log(message());