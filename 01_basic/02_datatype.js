/*✅DataType in javaScript --
A data type is the kind of value you can store in a variable (like numbers, text, true/false, etc.).

JavaScript is a dynamically typed language, which means you don’t need to declare the data type before giving a value to a variable. The type is decided automatically at runtime based on the data you provide.
*/

//✅In javaScript we have two different data type category
/*✅Primitive-data -- Primitive types are basic, single values. They are immutable (cannot be changed directly).
1.Number
2.BigInt
3.String
4.Boolean
5.Null
6.Undefined
7.Symbol 
*/

/*✅Non-Primitive-data -- Non‑primitive types are complex structures. They can hold multiple values and are mutable.
1.Array
2.object
3.function
*/

"use strict" // treat all js code as newer version

let name = "Brendan Eich";
let age = 64;
let isLoggedIn = true;
let bankBalance = 23333333333254545535n;
let photo = undefined;
let data = null;
const id = Symbol("unique");

console.log(name)
// Used to print/output values to the browser’s console.

console.table([typeof(name),typeof(age),typeof(isLoggedIn),typeof(bankBalance),typeof(photo),typeof(data),typeof(id)]);
// Displays data in a tabular (table) format in the console.


// alert("hello World!")//We are using node js not a browser
console.log(3 +


    3
);console.log("Ryan Dahl")// code readability must should be high


//✅single vs Double Quotes in JavaScript Strings
//•Both single () and double () quotes work the same way in JavaScript.
//•It’s mostly a matter of style and consistency.