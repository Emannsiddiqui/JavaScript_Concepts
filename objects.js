//objects
let city = {
    name : "Karachi",
    country : "Pakistan",
    language : "Urdu",
    currency : "PKR",
    //array in a object
    landmarks : ["Quaid-e-Azam House", "Karachi Beach"],
    //function
     greetMsg : function(){
        console.log("Welcome to " + this.name);
    }
}
city.greetMsg();

//creating objects using new keyword
let person = new Object(); //creating object using the OBJECT CONSTRUCTOR
person.name = "Eman Siddiqui";
person.age = 21;
person.city = "Karachi";
person.occupation = "Engineer";
//function
person.greet = function(){
    console.log("Hello");
};
let func = person.greet();

//Accessing object Properties
//by using "."
console.log(city.currency);
//by brackets
console.log(person["name"]);

//remove property
delete city.language;
console.log(city.language);
city.language = "English"; //re-assign
console.log(city.language);

//iteration of an object
//by using for in loop
for(let i in city){
    console.log(i + " : " + city[i]);
}

//propert existence checking
console.log("name" in city); //using in operator
console.log("cuisine" in city);
console.log(person.hasOwnProperty("name")); //using hasOwnProperty method