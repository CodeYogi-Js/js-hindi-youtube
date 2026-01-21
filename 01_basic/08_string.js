/*✅String
A string in JavaScript is a primitive data type that represents text, written inside quotes.
*/

const name = "Brendan Eich";
const repoCount = 50
console.log(name + " " + repoCount +" "+"value") 
//String Operation (Concatenation)


//✅String Interpolation
// String interpolation in JavaScript is a powerful way to insert variables or expressions directly into a single string using template literals
console.log(`hello ${name}, i know you repo count is ${repoCount}`)


const gameName = new String("Ryan-dahl-hc-com")
// you are using new keyword to create a String object (not a primitive string).
//"Ryan-dahl-hc-com" -> just text (primitive). 
//new String("Ryan-dahl-hc-com") a wrapper object around that text, which gives you extra object-like behavior
// primitive strings already have access to string methods because JavaScript automatically wraps them when needed.



console.log(gameName[0])
gameName[0] = "A"
console.log(gameName)

// - gameName[0] does return "R" — so it looks like an array, right?
// - But when you try to change gameName[0] = "A", nothing happens.
// Why? Because strings are immutable in JavaScript — even when wrapped in an object like new String()




console.log(gameName.__proto__)//output: {}//empty object
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf("a"))
console.log(gameName.includes('-'))

const newString = gameName.substring(0,4)
console.log(newString)
//Extract part of a string, Does not support negative indexes.
//If start>end , it swaps them.

const anotherString = gameName.slice(-8,4)
console.log(anotherString)
//Extract part of a string or array.upports negative indexes (count from the end).
//If start>end, returns empty string.


const newStringOne = "         Brendan     Eich    "
console.log(newStringOne.trim())
console.log(newStringOne.trimEnd())
console.log(newStringOne.trimStart())

const url = "https://brendanEich%20google%20.com"
console.log(url.replaceAll("%20",("-")))
console.log(url.replace("%20",("love")))
console.log(url.split("%20"))
// splits a string into an array based on the separator you give.