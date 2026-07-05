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
//the block scope is a feature of JavaScript that allows variables to be defined within a specific block of code, such as an if statement or a loop. This means that the variable is only accessible within that block and cannot be accessed outside of it. This helps to prevent naming conflicts and makes the code easier to read and maintain. In contrast, function-scoped variables are accessible throughout the entire function in which they are defined, which can lead to unintended consequences if not managed carefully.
//therefore , it is generally recommended to use block-scoped variables (let and const) whenever possible, as they provide better encapsulation and reduce the risk of naming conflicts. However, there may be cases where function-scoped variables (var) are necessary, such as when working with legacy code or when defining variables that need to be accessed across multiple functions. In these cases, it is important to use clear and descriptive variable names to avoid confusion and ensure that the code is easy to understand.


