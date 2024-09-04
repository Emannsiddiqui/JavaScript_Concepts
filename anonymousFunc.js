console.log("start");
//settimeout
setTimeout(function(){
    console.log("This message is delayed by 2 seconds");
},2000);

//array with map
let arr = [1,2,3,4];
let doubleArr = arr.map(function(i){
    return i * 2;
});
console.log(doubleArr);

//array with filter
let num = [1,2,3,4,6,7];
let evenNum = num.filter(function(i){
    return i%2 === 0;
});
console.log(evenNum);

//we also use anonymous functions in function expression
let sum = function(a,b){
    return a + b;
}
console.log(sum(1,2));