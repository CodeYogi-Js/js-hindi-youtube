/*✅Number is not a operator not a library.
Number is a built-in global object (constructor function) in 
javaScript that works with numeric values.
*/

const score = 400
console.log(score)

let balance = new Number(100)
console.log(balance)

// let changeBalance = balance
// console.log(balance)
// console.log(changeBalance)
// changeBalance = 500

// console.log(balance)
// console.log(changeBalance)

console.log(balance.toString())
console.log(balance.toString().length)

const value = 100.0000
console.log(value.toPrecision(4))
console.log(value.toFixed(1))

const hundreds = 100000000000
console.log(hundreds.toLocaleString("en-in"))
console.log(hundreds.toLocaleString("en-us"))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)


/*✅Math is a built-in global object in javascript.
with helpful math tools you don't create it - you just use it methods.
*/
console.log(Math.round(4.6))
console.log(Math.PI.toFixed(2))
console.log(Math.floor(4.6))
console.log(Math.ceil(2.1))
console.log(Math.min(3,4,2,56,56,2,56,2,56,4,6))
console.log(Math.max(3,4,2,56,56,2,56,2,56,4,6))
console.log(Math.pow(2,5))
console.log(Math.abs(-8))
console.log(Math.sqrt(645))
console.log(Math.random())

console.log(Math.floor(Math.random()*10)+1)
const min = 10
const max = 100
console.log(Math.floor(Math.random()*max-min+1)+min)