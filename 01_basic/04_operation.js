/*✅Operators in javaScript
In JavaScript, operators are special symbols or keywords used to perform operations on values and variables.
1.Arithmatic Operator
2.Assignment Operator
3.Comparison Operator
4.Logical Operator
5.Bitwise Operator
6.String Operator (+) concatenation
7.Ternary Operator
*/

//✅Arithmatic operator
let value = -3
let negativeValue = value
// console.log(negativeValue)

// console.log(3+3)//addition
// console.log(3-3)//subtraction
// console.log(3*3)//multiplication
// console.log(15/3)//division
// console.log(3**3)//exponentiation
// console.log(15%3)//modulo operator



//✅Assignment Operator =, +=, -=, /=, *=



//✅Comparison Operator comming....just next file





//✅logical Operator && -> AND, || ->OR, ! ->NOT
let isLoggedIn = true;
let hasAccess = false
console.log(isLoggedIn && hasAccess);//false








//✅Bitwise Operator & -> AND, | -> OR, ^ -> XOR








//✅String Operator (Concatenation)
// const firstName = "Brendan"
// const lastName = "Eich"
// const fullName = firstName+" "+ lastName
// console.log(fullName)




//✅Ternary Operator
const myAge = 27
myAge >= 18 ? console.log("you are adult.") : console.log("You are too much young....")



/***************extra*********************************/
//Complex situation
console.log("1"+2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(null + 1)
console.log(undefined + 1)


// Type coercion means JavaScript automatically converts one data type to another when needed—especially in operations involving mixed types (like strings and numbers).
console.log('10' - '4');     // ?
console.log(false + 'true'); // ?
console.log(null == 0);      // ?
console.log(undefined == null); // ?


//JavaScript Operator Precedence
console.log((3+4)*5 %3)
console.log(+true)

// When operators have same precedence, JavaScript uses associativity:
// 1. ( )         → Grouping (do first)
// 2. **          → Exponentiation (right to left)
// 3. *, /, %     → Multiply, Divide, Modulo (left to right)
// 4. +, -        → Add, Subtract (left to right)

// - Left-to-right: +, -, *, /
// - Right-to-left: =, **, ? :



// console.log(true+) //not possible

console.log(+"")

let num1, num2, num3

num1 = num2 = num3 = 2 + 2


//Increment Operator and Decrement Operator 
//Prefix and Postfix
//Prefix () → increases the value before it’s used.
//Postfix () → increases the value after it’s used.
let gameCounter = 100
gameCounter++;
console.log(gameCounter)