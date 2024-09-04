//objects
let car = {
    //object literals
    company : "Suzuki",
    model : "Cultus",
    color : "White",
    year : 2007,
    carStart : function(){
        console.log("The car is starting");
    }
}
car.carStart();
console.log(car.company);

let enteries = Object.entries(car);
console.log(enteries); 

//destructing
let {company, model, color, year} = car;
console.log(company, model, color, year);

//spread
let obj1 = { a : 1,
    b : 2
}
let obj2 = {
    a : 3,
    c: 4
}
let obj3 = {
    ...obj1, ...obj2
}
console.log(obj3);

//rest operator
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); 


//----------ARRAYS----------------
let cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];

cities.push("Sukkur");
cities.pop();
cities.shift(); //removes the first element
cities.unshift("Jamshoro");
console.log(cities);
//map
let uppercase = cities.map(function(cities){
    return cities.toUpperCase();
});
console.log(uppercase);
//filter
let short = cities.filter(function(cities) {
    return cities.length <= 6;
});
console.log(short); // 
