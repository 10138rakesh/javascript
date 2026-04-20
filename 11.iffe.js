// iife (Immediately Invoked Function Expression)
// The function is executed at the same time it is created, without calling it later.
// we dont have to call the function separately, it will be called immediately after its creation
(function(){
    console.log("I am an IIFE");

})();

console.log("Start");

(function () {
    console.log("IIFE running");
})();

console.log("End");
// output  :
// Start
//IIFE running
//End




// 🎯 1. What interviewer can ask about IIFE?

// Here are the most common interview questions 👇

// ❓ Q1: What is IIFE?

// 👉 Best Answer:

// “IIFE stands for Immediately Invoked Function Expression. It is a function that is defined and executed immediately after its creation.”

// ❓ Q2: Why do we use IIFE?

// 👉 Best Answer (VERY IMPORTANT ⭐):

// “We use IIFE to avoid global scope pollution and to create a private scope for variables.”

// ❓ Q3: What problem does IIFE solve?

// 👉 Answer:

// “It prevents variables from leaking into the global scope and avoids naming conflicts in large applications.”

// ❓ Q4: What is the output?
// let x = 1;

// (function () {
//     let x = 2;
//     console.log(x);
// })();

// console.log(x);

// 👉 Answer:

// 2
// 1

// 👉 Because:

// IIFE has its own scope
// Global x is not affected
// ❓ Q5: Can IIFE take parameters?

// 👉 Yes ✅

// (function (name) {
//     console.log(name);
// })("Rakesh");
// 🚀 2. Advantages of IIFE (Must Remember ⭐)
// ✅ 1. Avoids Global Scope Pollution

// 👉 Without IIFE:

// let a = 10;
// let b = 20;

// 👉 Too many globals → conflicts ❌

// 👉 With IIFE:

// (function () {
//     let a = 10;
//     let b = 20;
// })();

// 👉 Safe ✅ (not global)

// ✅ 2. Creates Private Variables (Encapsulation)

// 👉 Variables cannot be accessed outside

// (function () {
//     let secret = "hidden";
// })();

// 👉 secret is protected 🔒

// ✅ 3. Avoid Naming Conflicts

// 👉 In big projects:

// Many developers
// Same variable names

// 👉 IIFE prevents clash

// ✅ 4. Executes Code Immediately

// 👉 Useful for:

// Initialization
// Setup code
// ✅ 5. Used Before ES6 Modules

// 👉 Earlier JS didn’t have modules
// 👉 IIFE was used to simulate modules

// ⚠️ 3. Why not always use IIFE? (Smart Answer)

// 👉 Interview bonus answer:

// “With ES6, we now use let, const, and modules, so IIFE is less common,
//  but still important for understanding scope and closures.”

// 🧠 4. When should you use IIFE?

// 👉 Say this:

// “IIFE is useful when we want to execute some code once and keep variables private without affecting the global scope.”

// 🔥 Perfect Final Interview Answer (Memorize This)

// If interviewer asks:

// 👉 “Why IIFE?”

// Say:

// “IIFE is used to create a private scope and avoid global namespace pollution. 
// It helps in preventing variable conflicts and is useful for executing code immediately.”

