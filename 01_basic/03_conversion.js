/*✅JavaScript Conversion --
In javaScript, conversion means changing one data type into another.
This can happen in two way:
implicit Conversion -> javaScript automatically converts value during operations.

Explicit Conversion -> you use functions of operators to convert values.
*/

let score = true;
console.log(typeof score)

let valueInNumber = Number(score)
//Number() is a built-in function that converts a value (like a string, boolean, or even null) into a number type.

console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" -> 33
//"33abc" -> NaN
//true -> 1; false -> 0

let isLoggedIn = "Ryan Dahl"
let booleanValue = Boolean(isLoggedIn);

console.log(typeof isLoggedIn)
console.log(booleanValue)
console.log(typeof booleanValue)


//1 -> true; 0 -> false
//"" -> false
//"Ryan dahl" -> true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(typeof someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)