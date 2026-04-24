// preemitive data type : Primitive data types store single, simple values and are immutable (cannot be changed directly).
/*Number
String
Boolean
Undefined
Null
BigInt
Symbol
*/



/*Non-primitive data types store collections or complex data and are mutable.
Object
Array
Function
*/



//Symbol is a unique and immutable primitive value that can be used as a key for object properties.
//  It was introduced in ES6 (ECMAScript 2015) and is often used to create unique identifiers for object properties, 
// ensuring that they do not conflict with other property keys. Symbols are created using the Symbol()
//  function and can be used to define properties on objects without the risk of name collisions.

let x;                        //this is undefined datatype not theb null or empty 
const id=Symbol('123')
const userId=Symbol('123')
console.log(id===userId);     // false because both are unique and immutable


/*
Difference between the == and the ===
1) == this convert the data first and the all the data in the same data type and then tell wheather both are equal or not .
console.log(5 == "5");        // true
console.log(true == 1);       // true
console.log(null == undefined); // true

2) === this just check wheather both are equal or not if not false else true without converting the data in the question 
console.log(5 === "5");   // false
console.log(true === 1);  // false
console.log(10 === 10);   // true
 */



/*
Primitive vs Non-Primitive (Reference) — How Changes Work
🔸 1. Primitive Data Types

Examples:

number, string, boolean, null, undefined, symbol, bigint

👉 Stored as value

✅ Behavior:

When you copy or assign → actual value is copied

💻 Example:
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
🧠 Why?
a and b are independent copies
Changing b does NOT affect a
🔸 2. Non-Primitive (Reference Types)

Examples:

object, array, function

👉 Stored as reference (address in memory)

✅ Behavior:

When you copy → reference is copied, not actual data

💻 Example:
let obj1 = { name: "Rakesh" };
let obj2 = obj1;

obj2.name = "Tripathy";

console.log(obj1.name); // Tripathy
console.log(obj2.name); // Tripathy
🧠 Why?
Both obj1 and obj2 point to same memory
So change reflects everywhere
🔥 Key Difference (Interview Line)

👉 Primitive → copy by value
👉 Non-Primitive → copy by reference
*/
 
