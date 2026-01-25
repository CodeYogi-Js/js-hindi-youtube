/*✅Array
array in javaScript is collection of similar type (homogenius) multiple element collection in storing one variable. like(number,string,boolean,undefined,null...etc)
*/
const myArray = [0, 2, 4, 6, 9, 29]
// console.log(myArray)

//javaScript array-copy operations create shallow copies
//A shallow copy of an object is a copy whose properties share the same referance points.
//A Deep coop of an object is a copy whose properties do not share the same references.

const myHero = ["shaktiman", "naagraj"]
const myArr = new Array(1, 2, 3, 4)
// console.log(myArr[0])

//Array method

myArr.push(222,42)//add last
myArr.pop()//remove end
myArr.pop()//remove end
myArr.unshift(45,2445)//add first
myArr.shift()//remove first
myArr.shift()//remove first
myArr[2] = 35
// console.log(myArr)
// console.log(typeof(myArr))

const fruitBucket = ["apple","banana","mango"]
const vegitebalBucket =["birngal", "onion", "cabbage","tomato","potato","chili"]
const newBucket = vegitebalBucket.slice(0,2)
// console.log(vegitebalBucket)
// console.log(newBucket)
//slice method in array not change original array. remove original element return new array if you can store and last index value not include slice index.

const newBucket2 = fruitBucket.splice(0,2,22,221,undefined,null)


//I think this splice method have three parameter inside splice operation haven (choose starting index, remove element digit, add multiple element(string,number,boolean,undefined,null,bigint,symbol))
//remove element work original array and remove value give new variable to store.
//add element add original array 
// console.log(fruitBucket)
// console.log(newBucket2)

const marvelHeros = ["thor","Ironman","spiderman"]
const dcHeros = ["superman","flash","batman"]
// const addHeros = marvelHeros.push(dcHeros)
// console.log(addHeros)
//if push method give result length
// console.log(marvelHeros)
// console.log(marvelHeros[3][0])

const margeAll = marvelHeros.concat(dcHeros)
console.log(marvelHeros)
//concant return a new array
console.log(margeAll)


const margeSpredWay = [...dcHeros,...marvelHeros]
console.log(margeSpredWay)

const nestingArray = [2,34, 4,[34,56,2,[35,45,3],56,3],24]
console.log(nestingArray)

const nestingArrange = nestingArray.flat(Infinity)
console.log(nestingArrange)

console.log(Array.isArray("ryan dahl"))
console.log(Array.from("BrendanEich"))
console.log(Array.from({name: "Brendan Eich"}))//interesting

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score,score2,score3))




//Array.isArray(), Array.from(), Array.of() are Array static methods.
// • They belong to the Array class itself, not to individual arrays.
// • You call them directly on , not on a variable.
// ✅Instance methods = tools you use on a specific box of items (your array).
// ✅Static methods = tools provided by the factory () itself to create or check boxes.