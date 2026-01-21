//Primitive Data Type
//7th type: number, bigint, string, boolean, null, undefined, symbol
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;

const id = Symbol("234")
const anotherId = Symbol("234")

console.log(id === anotherId)
const bigNumber = 234444444444444444444444n;

//Referance (Non-primitive) 
//array, function, object
const hero = ["superman", "saktiman", "nagraj", "doga"]

let myObj = {
    name: "rayn Dahl",
    age: 22,
    qualyfication: '12+'
};

const myfun = function(){
    console.log("hello World!")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myfun)
