// Global Scope it can be accessed anywhere in the program but not a good practice
let name = "Rakesh";

function greet() {
    console.log(name);
}
greet();

//function Scope only accessible inside the function
function test() {
    let x = 10;
    console.log(x);
}
test();

//block Scope only accessible inside the block   
///****   let and const are the block scope  whereas the var is function-scoped*/


