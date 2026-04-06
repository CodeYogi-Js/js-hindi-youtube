//!📁00_basic folder


/*
?☑️What is computer Programming.
=>Computer Programming is a medium for us to communicate with Computer.
Just like We used "Hindi" or "English" to communicate with each other.
Similarly Computer Programming is a way for us to deliver our instuction
to the computer.

?☑️what is JavaScript or purpose of used javaScript.
1. JavaScript is the language of the web, to make websites interactive and dynamic.
2. It is a powerful programming language that transfrom static page into responsive experiences.
3. JavaScript is a High-level programming language,meaning it syntax are every easy for human read and write (e.g. loop, if-else etc).
4. It build frontend logic and functionlity of websites, controlling how pages react on user actions.
5. together with HTML(structure) and css(style), JavaScript acts as the brain of webpage that makes it come alive.
6. Earlier JavaScript ran inside browser, right now we can run outside of browser so we can use server side.

?☑️History of JavaScript.
=>JavaScript was developed by Brendan Eich in 1995 While Working at Netscape.The first name decided was "Mocha" then it change to "LiveScript" and Finally Rename "JavaScript" because of various marketing resone.Although there is no relation between java and javaScript.

ECMAScript was standardized by ECMa Interanationl for JavaScript. Becuase of some issues, different browser started supporting different version of javaScript.Which caused confilcts. So ECMAScipt Standardized javaScript to ensure it runs the same way across the world in different browsers.

Earlier JavaScript ran only inside the browser. In 2009 Ryan Dahl developed Node.js, which allowed JavaScript to run outside the browser. Because of this, many possibilities came, and JavaScript could also run on backend servers. Now one single language can run both frontend and backend. After some time, Ryan Dahl developed a more secure alternative to Node.js called Deno.js

Later, Brendan Eich co-founded Mozilla, the organization behind Mozilla Firefox. All original JavaScript documentation is available on MDN Web Docs (Mozilla Developer Network). After Brendan Eich stepped away, JavaScript began to be developed and maintained by the TC39 committee. Many of the world’s most popular and reputable companies work together in this committee to maintain JavaScript and ensure it becomes a powerful and easy-to-use language across the world.


?☑️JavaScript Version and Key Features
ES1 released in 1997 – first official version release.
ES3 released in 1999 – regular expressions and improved string handling.
ES5 released in 2009 – strict mode, JSON support.
ES6 released in 2015 – let, const, arrow functions, classes.
*/

//!📁01_Variable folder
/*
?☑️What is JavaScript Variable.
🟰Variable is a Container which store a value. In our kitchen we have rice, dal, sugar etc. Similarly Variable in JavaScript store a value or data (like string, number, boolean etc.)

?Rule of Variable Declartion.
1. First Character must be Alphabet, undersore(_) or dollor sign ($).
2. no commas, bank space allowed.
3. no special symbol allow other then undersore(_) or dollor sing ($).
4. Variable are case sensitive.
5. In our JavaScript code to prefer allows write meainingful variable name. That inhance our program readability.

?Variable naming Convension.
1. camelCase (e.g. userFirstName).
2. PascalCase (e.g. UserFirstName).
3. snake_case (e.g. user_first_name).
4. kebab-case (e.g user-first-name).
5. UPPER_SNAKE_CASE (e.g USER_FIRST_NAME). 
*/

// username = "Brendan Eich"
// console.log(username)

/*
?What are var, let and const.
In JavaScript we follow one rule before variable declaration. We must declare which type of variable we are using. In JavaScript we have 3 types of variables.

var - It is an old way to declare variables and var is function-scoped. var can be redeclared and reassigned.

let - It is a newer way to declare variables introduced in ES6 (2015). let is block-scoped and only valid inside {}. let cannot be redeclared in the same scope but the value can be reassigned.

const - It is also introduced in ES6 and const is block-scoped, valid inside {}. It cannot be redeclared or reassigned. The most important thing is when using const, the variable must be assigned a value at the time of declaration.
*/


const accountId = 134445
let accountEmail = 'babu@gmail.com'
var accoundPassword = '12434345'
accountCity = 'jaipur' //❌ variable create without declartion(❌not recommended)
let accountState; // declared but no value assigned javaScript give undefined.

// accountId = 2 ❌ // assignment to constant variable

accountEmail = 'hecte@gmail.com'
accoundPassword = '234234'
accountCity = "bengaluru" 

// console.log(accountId)
//?console.log is used to print output and debug code in the browser console or terminal

// console.table({accoundPassword, accountId, accountState, accountCity, accountEmail})
// ?console.table If nothing is passed, the argument becomes undefined, so the console shows undefined.

// console.table()
//?if empty console.table print why undefined print
// console.log()
//?empty line

/*
?What is Keywords.
Keywords are reserved words in a programming language that cannot be used as variable names.
*/

// var var = 3; ❌
// let let = 'okey' ❌
// const const = null; ❌


/*
Scope in Variable
?Global Scope -- A variable declare outside a function or block scope called global scope

? Block Scope -- A variable only valid inside {} curlybraces. let and const is a Block Scope.

? function Scope -- Var type variable declared inside function and only valid inside of function scope.
*/


/*
Hoisting in javaScript.
?Hoisting means JavaScript moves variable and function declarations to the top of their scope before the code runs.
*/

// sayHi()
// function sayHi(){
//     console.log("hello ")
// }


//!📁03_dataType


/* DataType in JavaScript --
A data type is the kind of value stored in a variable (like string, number, boolean, etc).

JavaScript is a dynamically typed language,
which means JavaScript automatically understands what type of value is stored in a variable.

? JavaScript datatype are two types:
(1) Primitive Data
(2) Non-Primitive Data

(1) Primitive Data:
Primitive data are simple and store a single value.
They are immutable (cannot be changed directly).

Types:
string, number, bigint, boolean, undefined, null, symbol

(2) Non-Primitive Data:
Non-primitive data are complex and mutable.

Types:
object, array, function
*/

// let name = "Brendan Eich"
// let age = 23
// let netWorth = 23423244453454434n;
// let death = false;
// let socialAccount = undefined;
// const haveOwnIland = null;
// let key = Symbol('332')

// console.table([
//   typeof name,
//   typeof age,
//   typeof netWorth,
//   typeof death,
//   typeof socialAccount,
//   typeof haveOwnIland, //? "object" (special case)
//   typeof key
// ])



/*
? Comment ?

Comments are simple text that are ignored by the JavaScript engine.
They are used to explain code and help other developers.

? Types of comments:
*/
// Single-line comment

/*
   Multi-line comment
*/

 
/*
? Single quotation and double quotation in JavaScript string?

Both can be used in JavaScript.
Best practice: be consistent as a developer.

You can also use backticks (` `) for dynamic values.
*/


// "use strict" // treat all JavaScript code as newer version (strict mode)

// alert(3 + 3) // works only in browser, not in Node.js

// console.log(
//   3 + 3
// ) //? code readability should be high



//!📁04_Conversion

/*
?JavaScript Conversion--
In JavaScript, conversion means changing one data type into another.

(1) Implicit Conversion (Type Coercion)
- JavaScript automatically converts data types during operations.

(2) Explicit Conversion (Type Casting)
- We manually convert data types using functions or operators.

*/

// let score = true;
// console.log(typeof score)
// let valueNumber = Number(score)
// console.log(typeof valueNumber)
// console.log(valueNumber)
// let stringNumber = String(valueNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


//Number() is a built-in function that convert a value.
//?So unary operator → works on one value

//"33" == 33
//"33abc" == NaN
//ture == 1 , false == 0

// let isLoggedIn = "Ryan Dahl";
// let booleanValue = Boolean(isLoggedIn)
// console.log(isLoggedIn)
// console.log(booleanValue)
// console.log(typeof(booleanValue));

//1 == true, 0 == false,
//"" == false, "Rayn dahl" == ture

// const password = '333abc'
// console.log(typeof password)//?String
// const convertPassword = Number(password)
// console.log(convertPassword)//? NaN
// console.log(typeof convertPassword)//? number
// const convertBoolean = Boolean(convertPassword)
// console.log(convertBoolean)//? false
// console.log(typeof convertBoolean)//? boolean
// const convertString = String(convertBoolean)
// console.log(convertString)//? "false"
// console.log(typeof convertString)//? string



//!📁05_Operators In JavaScript

/*
An operator is used to perform operations on values (like numbers, strings, or variables)
(1️⃣) Arithmetic Operator
addition +, subtraction -, multiplication *, division /, modulo %, exponentiation **,
(2️⃣) Assignment Operator
=, /=, *=, -=, +=,
(3️⃣) Logical Operator
&&, ||, !,
(4️⃣) Comparison Operator
(5️⃣) Bitwise Operator
(6️⃣) Ternary Operator
(7️⃣) String Operator (Concatenation Operator)
*/

//(1️⃣) Arithmetic Operator
// let value = -3;
// console.log(value)
// console.log(3 + 3)
// console.log(5 - 3)
// console.log(3 * 3)
// console.log(5 / 3)
// console.log(5 % 3)
// console.log(3**3)


//(2️⃣) Assignment Operator
/*
x += y   // x = x + y add and assign
x -= y   // x = x - y subtract and assign
x *= y   // x = x * y multiply and assign
x /= y   // x = x / y divide and assign
x %= y   // x = x % y modulo and assign
x **= y  // x = x ** y exponentiation and assign
*/

//(3️⃣) Logical Operator
// let isLoggedIn = true;
// let hasAccess = false;
// console.log(isLoggedIn && hasAccess) // false
// Logical operators are used to combine conditions and return true/false (or actual values)

// console.log('babu' && 5)
// console.log(0 && 5)
// console.log('babu' || 5)
// console.log(0 || 5)

// In &&, if both values are true it returns the last value, otherwise it returns the first false value
// In ||, it returns the first true value, and if none are true, it returns the last value
// console.log('babu' && " " && 5) // 5
// console.log('babu' && "" && 5)  // ""

//(4️⃣) Bitwise Operator & (AND), | (OR), ^ (XOR)
// console.log(15 & 13)
// ℹ️ Convert number 15 to binary → 1111
// ℹ️ Convert number 13 to binary → 1101
// Apply AND logic: 1 AND 1 = 1, otherwise 0 → 1101 = 13

//(5️⃣) Ternary Operator
// let userAge = 18;
// userAge >= 18 ? console.log("adult.") : console.log("kid.")

//(6️⃣) String Operator (Concatenation)
// const firstName = "Brendan "
// const lastName = "Eich"
// console.log('User name is ' + firstName + lastName)



//ℹ️********extra complex situation*********
// console.log("1" + 2) 
// console.log(1 + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// console.log(null + 1)
// console.log(undefined + 1)

//?Type coercion means JavaScript automatically converts one data type to another when needed—especially in operations involving mixed types (like strings and numbers).

// console.log('10' - '4')
// console.log(false - 'true')
// console.log(null == 0) 
// console.log(undefined == null)

//⭐ + → string concatenation if any operand is string
//⭐ - , * , / → convert everything to number
//⭐ == → loose comparison (type conversion happens)


//✔️javaScript Operator Precedence
// console.log((3 + 4)* 5 % 3)
// console.log(+true)

//when Operator have same precedance, javaScript uses associativity:
/*
1️⃣ () -> Grouping (do first)
2️⃣ ** -> exponentiation (right to left)
3️⃣ *, /, % -> same left to right
4️⃣ + , -> same left to right
*/

// console.log(true+) ❌
// console.log(+"") 

// let num1, num2, num3
// num1 = num2 = num3 = 2+ 2

//⭐ Increment Operator and Decrement Operator
//Prefix and postfix
//prefix (--x) -> increas value before use.
//postfix (++x) -> first use after increas.



//!📁06_Comparison Operator

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

//ℹ️Problem come not comparison defferent operator.
// console.log("2" > 1)
// console.log("02">1)

// console.log(null> 0)
// console.log(null == 0)

//ℹ️Equality (===) does not convert null to a number—it only matches with undefined.
// console.log(null >= 0)

// console.log(undefined == 0)
// console.log(undefined > 0)
// console.log(undefined < 0)

//ℹ️ Strick check
// console.log("2"=== 2)
// console.log("2"!==3)


//!📁07_DataType summary


// const score = 100;
// const scoreValue = 100.3;
// const isLoggedIn = false;
// const outSideTemp = null;
// let userEmail = undefined;

// const id = Symbol("234")
// const anotherId = Symbol("234")
// console.log(id === anotherId)

//ℹ️Non-premitive (referance)
//array, object, function
// const array = [1, 2, 3, 4, 5]

// const myObj = {
//    userName :'Brendan Eich',
//    password : "234@babu",
//    age : 34,
//    isLoggedIn : true,
// }

// const myFun =function (){
//    console.log("hello world")
// }
// console.log(typeof array)
// console.log(typeof myObj)
// console.log(typeof myFun)



//!📁 08_stack and heap

// let myYoutubeName = 'hiteshchoudharydotcom'
// let anotherYoutubeName = myYoutubeName

// anotherYoutubeName = 'chaiaurcode'
// console.log(myYoutubeName)
// console.log(anotherYoutubeName)

// let userOne = {
//    email: "user@gmail.com",
//    upi: "user@ybl"
// }
// let userTwo = userOne
// userTwo.email = 'hitesh@google.com'
// console.log(userOne)
// console.log(userTwo)


/*⭐In JavaScript, primitive data types are stored
in the stack and are accessed by value, so they
create a copy. Non-primitive data types like objects 
and arrays are stored in the heap, and variables store
references to them, so changes affect the original data.

Stack stores primitive values directly
and for objects it stores reference (address)
*/



//! 📁09_string

/*
⭐A string in javaScript is a premitive data type that represent text, write inside quote.
*/
// const name = 'brendan Eich';
// const repo = 50;
// console.log(name + " " + repo + " " +"value.")

//⭐string operation (concatination)
//String interpolation in javaScript is a powerful way to insert variable or expressions direactly in a single string usring template literals.
// console.log(`hello ${name}, i know your repo count is ${repo}`)

// const gameName = new String('Ryan-dahl-hc-com')

//⭐The new keyword creates a String object using a constructor, but normally we use primitive strings because JavaScript automatically provides access to string methods.

//⭐A constructor is a special function used to create and initialize objects using the new keyword.

// console.log(gameName[0])
// gameName[0] = 'A'
// console.log(gameName)

// gameName[0] does return 'R' - so it looks like an array, right?
// but when you try to change gameName[0] = 'A', nothing happens. 
//⭐why? because strings are immutable in javaScript - even when wrapped in an object like new string().

// console.log(gameName.__proto__)//output: {} empty object

//⭐__proto__ is used to access the prototype of an object. In the case of a string, JavaScript temporarily wraps it into a String object, allowing access to methods defined on String.prototype. This behavior is the same in both Node.js and browser environments.

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())

// console.log(gameName.charAt(22))//return character not finde ''
// console.log(gameName.indexOf('-df'))//return index number not match -1
// console.log(gameName.includes('dahl'))//true or false

// const str = "JavaScript"
// console.log(str.substring(-1))
/*⭐1. substring does NOT support negative values ❌
 2. negative values are converted to 0 ✅
 3. end index is NOT included ✅
 4. if start > end → it swaps values ✅
 5. returns a new string (does not change original) ✅
*/
// console.log(str.slice(-1, -5))
/*⭐1. slice supports negative values ✅
 2. negative index counts from end (-1 = last) ✅
 3. end index is NOT included ✅
 4. if start > end → returns "" (no swap) ✅
 5. returns a new string (does not change original) ✅
*/
// const newString = "      Brendan    Eich          "
// console.log(newString.trimStart())
// console.log(newString.trimEnd())
// console.log(newString.trim())

// const url = 'https://brendanEich%20google%20.com'
// console.log(url.replace('%20',' '))
// console.log(url.replaceAll('%20',' '))

// console.log(url.split())
// console.log(url.split(""))
// console.log(url.split("%20"))
/*
⭐split()
 1. no argument → whole string as single array
 2. "" → splits into characters
 3. "text" → splits based on separator
*/

// const codePrint = 'hello world'
// console.log(codePrint.startsWith('ph'))
// console.log(codePrint.endsWith('l'))
//⭐ return true and false

// console.log(codePrint.repeat(4))

// const number = '5'
// console.log(number.padStart(3, '0'))
// console.log(number.padEnd(5,'0'))


// let text = "Order ID: 12345";

//⭐search()
// console.log(text.search(1));    // 10
// console.log(text.search('1'));  // 10

//⭐ 1. returns index of first match
// 2. returns -1 if not found
// 3. supports string and regex
// 4. always returns number
// 5. finds only first match

//⭐match()
// console.log(text.match('ID'));  
// ["ID", index: 6, input: "Order ID: 12345", groups: undefined]

//⭐1. returns matched value(s) as array
// 2. returns null if not found
// 3. supports string and regex
// without 'g':
// → returns match + index + input info
// with 'g':
// → returns all matches (array)
// → no index info







//!📁 10_number_and_math
/*
Number is not a operator not a library.
Number is a build-in global objcet (constructor function) in
javaScript that work with numeric values.
*/
// const num = 400;
// console.log(num)

// const balance = new Number(100000)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toLocaleString('en-IN'))

/*⭐A locale represents regional and language settings used to format dates, numbers, and currencies according to a specific country or region.
"en-US" → English (United States)
"en-IN" → English (India)
"fr-FR" → French (France)*/

// console.log(num.toPrecision(2))
// console.log(111.34.toFixed(1))
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)

/*⭐Math is a built-in global object in javascript.
with helpful math tools you don't create it - you just use it methods.*/

// console.log(Math.PI.toFixed(2))
// console.log(Math.abs(-4))
// console.log(Math.pow(4,4))
// console.log(Math.round(4.4))
// console.log(Math.floor(5.9))
// console.log(Math.ceil(2.1))
// console.log(Math.max(...[2, 5, 34, 54, 24, 10]))
// console.log(Math.min(...[2, 5, 34,0, 54, 24, 10]))
// console.log(Math.sqrt(645))
// console.log(Math.random())

// console.log(Math.floor(Math.random()* 10 + 1))
// console.log(Math.floor(Math.random * 11))
/*Math.random() gives a value between 0 and 1.
✔ can be 0
✔ can be 0.5, 0.9, 0.999
❌ can NEVER be 1
 0.99 * 11 = 10.989 , 1 * 11 = 11❌*/




//!📁 11_Date 

/*✅Data is a build-in global object in javaScript.
 create date using new Date() constructor.*/
// let myDate = new Date();
// console.log(myDate)

// console.log(myDate.getFullYear())//year
// console.log(myDate.getDate())//25
// console.log(myDate.toString())
// console.log(myDate.toDateString())

// console.log(myDate.toJSON())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp / 1000))//second

// let birthday = new Date("1992-03-26")
// console.log(birthday)
// console.log(birthday.getTime())//timestamp







//! 📁12_Array

/* ✅Array is a collection of multiple values stored in a single variable.
It can store different types (heterogeneous) like number, string, boolean, null, undefined etc.
*/

// let array = [0, 2, 4, 6, 9, 29]
// console.log(array)


/* ✅ Shallow Copy
Shallow copy means copy shares same reference.
If you change copied object → original also affected.
(Only top-level copied, nested values still linked)
*/


/* ✅ Deep Copy
Deep copy means completely independent copy.
If you change copied object → original NOT affected.
(All levels are fully copied, no shared reference)
*/

/*⚠️ Important Difference 
const a = new Array(5)  
👉 creates empty array with length 5 → [empty × 5]

const b = [5]  
👉 creates array with value → [5]
*/
// const myHero = ['shaktiman','nagraj']//Array Literal
// const myArr = new Array(1, 2, 3, 4)//Array Constructor

// myArr.push(222,42)//add last
// myArr.pop()//remove end
// myArr.pop()//remove end
// myArr.unshift(45,2445)//add first
// myArr.shift()//remove first
// myArr.shift()//remove first
// myArr[2] = 35
// console.log(myArr)
// console.log(typeof(myArr))

// const fruitBucket = ["apple","banana","mango"]
// const vegitebalBucket =["birngal", "onion", "cabbage","tomato","potato","chili"]
// const newBucket = vegitebalBucket.slice(0,2)
// console.log(newBucket)
// console.log(vegitebalBucket)
// const splices = vegitebalBucket.splice(2,2,undefined,null)
// console.log(vegitebalBucket)
// console.log(splices)


/* ✅ slice() vs splice() — Important Rules */

/* 🔹 slice(start, end) */

/* ✅ CAN DO 
- does NOT change original array
- returns new array
- can take negative index
- end index NOT included
⭐slice(2) means: "copy from index 2 to end"

❌ CANNOT DO 
- cannot modify original array
- cannot insert/delete in original array*/


/* 🔹 splice(start, deleteCount, items...) */

/* ✅ CAN DO 
- changes original array (mutable)
- can delete elements
- can insert elements
- can replace elements
- returns deleted elements
⭐means: "cut everything from index 1"

 ❌ CANNOT DO
- cannot keep original array unchanged
- cannot skip modifying array*/


// const marvelHeros = ['spiderman', 'haalk', 'thor', 'ironman', 'balckwido']
// const dc$Heros = ['superman', 'batman', 'flash']

// ❌ Using push with array
// marvelHeros.push(dc$Heros)

// 👉 push() modifies the original array (marvelHeros)
// 👉 It adds dc$Heros as a SINGLE element (nested array)
// 👉 It does NOT change dc$Heros

// console.log(marvelHeros)
// ['spiderman', 'haalk', 'thor', 'ironman', 'balckwido', ['superman', 'batman', 'flash']]

// console.log(dc$Heros)
// ['superman', 'batman', 'flash'] (unchanged)

// 👉 push() returns new array length (not array)
// console.log(all$Heros) // e.g. 6

// 👉 Access nested value
// console.log(marvelHeros[5][0]) // superman



// ✅ Using concat()
// 👉 concat() merges arrays into a NEW array
// 👉 It does NOT modify original arrays

// const marge$All = marvelHeros.concat(dc$Heros)

// console.log(marge$All)
// merged single array

// console.log(dc$Heros)
// unchanged

// console.log(marvelHeros)
// unchanged (except if push was used before)

//?⭐ spread operator (...) is used to expand iterable elements like arrays or objects. It helps in merging, copying, and adding elements without modifying the original data.”
// const one = [1, 2, 3]
// const two = [4, 5, 6]
// const mrg = [...one, ...two]
// one[2] = 10
// two[2] = 20
// console.log(mrg)
// console.log(two)
// console.log(one)
//⭐⭐⭐const does not allow reassignment, but allows changing values inside arrays and objects

// const nestingArray = [2, 34, 4, [34, 56,2,[35, 45, 3],56,3], 24]
// console.log(nestingArray)
// const arrangeNestingArray = nestingArray.flat(1)
// const arrangesNestingArray = nestingArray.flat(Infinity)
// console.log(arrangeNestingArray)//Flattens only 1 level
// console.log(arrangesNestingArray)//Flattens only infinity
//⭐flat() removes nesting from arrays; depth controls how many levels are flattened.

// console.log(Array.isArray('rayn dahl'))//check array or not true, false
// console.log(Array.from('brendan Eich'))// each alphabet in array
// console.log(Array.from({username: 'brendan Eich'}))// empty array because object are not itterable

//⭐⭐⭐Array.from() is used to convert iterable or array-like data into a real array and can also transform data while creating it.

// const score1 = 'babu'
// const score2 = null
// const score3 = undefined
// const final$Score = Array.of(score1,score2,score3)
// console.log(final$Score)
//⭐Array.of() creates a new array from given values. It takes each value and puts it into an array. Works with any type (string, null, undefined, number, etc.)

// Array.isArray(), Array.from(), Array.of() are Array static methods.
// • They belong to the Array class itself, not to individual arrays.
// • You call them directly on Array, not on a variable.



// const arr = ['h', 'e', 'l', 'l', 'o']
// console.log(arr.join())//Default separator = comma(,) "h,e,l,l,o"
// console.log(arr.join(''))//Separator = nothing "hello"
// console.log(arr.join('-'))//Separator = - "h-e-l-l-o"
//⭐Best method to convert array to string with custom separator

// console.log(arr.toString())//Automatically joins with comma (,)
// console.log(String(arr))//function of operator to conversion string






//! 📁Object
//⭐singleton object means a single shared instance of an object used across the application.

//⭐object literal is the way of creating objects using {} in JavaScript.”

const jsUser = {
   name : 'Ryan Dahl',
   'full name': 'aniket bagmari',
   age: 23,
   email: 'rayndahl@gmail.com',
   location: 'jodhpur',
   isLoggedIn: false,
   lastLoggedInDay: ['monday', 'tuesday', 'wednesday','thursday','friday','saturday','sunday`']
}
console.log(jsUser)
//⭐There are two ways to access object properties in JavaScript: dot notation and bracket notation
console.log('js user email id is ',jsUser.email)//→ fixed name
console.log(jsUser['full name'])//👉 [] → dynamic or complex name
console.log(jsUser.lastLoggedInDay.length)


