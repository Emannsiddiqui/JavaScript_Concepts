var message = (function(){
    let msg = "Hello World";
    return msg;
}());
console.log(message);

//parameterized
(function(a,b) {
    console.log(a+b);
}(2,3));