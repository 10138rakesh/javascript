const { use } = require("react");

const key = Symbol("full name"); // this is a symbol data type, which is a unique and immutable primitive value that can be used as a key for object properties.
const userdata= {
    name: "Rakesh Chandra Tripathy",
    age: 30,
    city: "Bhadrak",
    hobbies: ["coding", "traveling", "cooking"],
    [key]: "Rakesh Chandra Tripathy", // the is a symbol in the key name, so we have to use bracket notation to access it



        

}

// console.log(userdata.name);  // this is a common way accessinng the value but not the only way to acvcess it
// console.log(userdata["name"]); // this is another way to access the value of the key name
// console.log(userdata[key]); // symbol can't be accessed by dot notation, we have to use bracket notation to access it

// // we can also add new key value pair to the object
// userdata.email = "rakesh@example.com";
// console.log(userdata.email);  // this is a common way to access the value of the key email
// console.log(userdata["email"]); // this is another way to access the value of the key email
// console.log(typeof userdata); 
// console.log(typeof key)  // this is a symbol data type, which is a unique and immutable primitive value that can be used as a key for object properties.

userdata.greeting = function() {
    console.log(`Hello my name is ${this.name} and I am ${this.age} years old and I live in ${this.city} and my hobbies are ${this.hobbies.join(", ")}.`);
}

console.log(userdata.greeting());   
console.log(userdata.greeting);