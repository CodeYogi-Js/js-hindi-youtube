/*✅Date is a built-in global object in javaScript.
create dat using the new Date() constructor.
*/

let myDate = new Date()
console.log(myDate)

console.log(myDate.getFullYear())
console.log(myDate.toString())
console.log(myDate.toDateString())

console.log(myDate.getDate())
console.log(myDate.toISOString())
console.log(myDate.toJSON())

console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(Math.floor(Date.now()/1000))

let birthday = new Date(1995, 11, 17); 
console.log(birthday);

