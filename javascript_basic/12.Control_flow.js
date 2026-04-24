//                                              CALL STACK

// call stack is a data structure that keeps track of the function calls in a program. 
// It is used to manage the execution of functions and to keep track of the order in which they are called. 
// When a function is called, it is added to the call stack, and when it returns, it is removed from the call stack. 
// This allows the program to keep track of which function is currently executing and to manage the flow of control in the program. 
// The call stack is an important concept in programming and is used in many programming languages, including JavaScript.
function one() {
    console.log("Inside One");
    two();
    console.log("End One");
}

function two() {
    console.log("Inside Two");
}

one();    

// ✅ Output:
// Inside One
// Inside Two
// End One

/* 
IMPORTANT
👉 JavaScript executes line-by-line, but when a function is called, it pauses the current function and executes the called function first. 
*/




//                              Control flow of JavaScript is the order in which the code is executed.


// It is determined by the structure of the code and the way it is written. 
// The control flow can be affected by various factors such as function calls, loops, conditionals, and asynchronous operations. 
// Understanding the control flow is important for writing efficient and effective code,
//  as it helps to ensure that the program runs smoothly and produces the desired results.


// 🧠 1. Call Stack (Execution Area)

// 👉 Where JavaScript runs code

// Works on LIFO (Last In First Out)
// Executes synchronous code only
// One function at a time
// After execution → function is removed (pop)

// ✔ Example:
// console.log(), normal function calls

// 📥 2. Callback Queue (Waiting Area)

// 👉 Where completed async tasks wait

// Works on FIFO (First In First Out)
// Stores callbacks of async operations
// Waits until stack becomes empty

// ✔ Example:
// setTimeout, events, fetch

// 🏭 3. Web APIs (Background Work)

// 👉 Handles async tasks outside JS

// Timer, network request, DOM events
// After completion → sends callback to queue
// 🔁 4. Event Loop (Manager)

// 👉 Connects Queue → Stack

// Continuously checks:
// ✔ Is stack empty?
// If yes → moves task from queue → stack
// 🔄 Full Flow (Golden Line 💯)
// Call Stack → Web APIs → Queue → Call Stackn n   