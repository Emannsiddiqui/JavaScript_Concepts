//takes function as an argument
//array methods
const arr = [1,2,3,4,5];
const double = arr.map(i => i*2);
console.log(double);

const evenNum = arr.filter(i => i%2 === 0);
console.log("Even numbers: " + evenNum);

const sum = arr.reduce((acc,i) => acc + i, 0);
console.log(sum);

//returning the functions with in the functions
function greet(message){
    return function(name){
        console.log(`${message} ${name}`);
    };
};
let sayHello = greet('Hello');
sayHello('Eman');

//function composition
const doubled = x => x+x; //func1
const square = x => x*x; //func2
const compFunct = x => square(doubled(x)); //composite function 
console.log(compFunct(5));

