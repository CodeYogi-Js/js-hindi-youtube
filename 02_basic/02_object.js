//singleton
//Object.create

//Object literal
let key = Symbol("dfd")
const jsUser = {
    name : "Ryan Dahl",
    "full name": "aniket bagmargi",
    [key]: 234,
    age: 18,
    emial: "ryandahl@gmail.com",
    location: "jodpur",
    isLoggedIn: false,
    lastLoggedinDay: ["Monday","Tuesday","wednesday","Thirsday","Friday","Saturday","Sunday"]
}
console.log(jsUser)
console.log(jsUser.name)
console.log(jsUser['emial'])
console.log(jsUser["full name"])
console.log(jsUser.lastLoggedinDay[6])
console.log(jsUser[key])
console.log(typeof(jsUser[key]))


//not change object key value
// Object.freeze(jsUser)
// jsUser.age = 33;
// console.log(jsUser)

//add function
jsUser.greeting = function() {
    console.log("hello js user")
}
jsUser.greeting2 = function(){
    console.log(`hello js user, ${this["full name"]}`)
}
console.log(jsUser)
console.log(jsUser.greeting())
console.log(jsUser.greeting2())

// In JavaScript, objects can hold any type of value: strings, numbers, arrays, even functions.
// When a function is stored inside an object, it’s called a method.

// - Inside an object method, this refers to the object itself (jsUser in this case).
// - So this["full name"] means:
// “Look inside the current object (jsUser) and get the property called "full name".”



//const tinderUser = new object()
const tinderUser = {}
tinderUser.id = "2342abfcf"
tinderUser.name = "samay rayna"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullName:{
        userFullName:{
            firstName: "Hitesh",
            lastName: "Chaudhary"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName)
console.log(regularUser["fullName"]["userFullName"]["lastName"])

//? question mark protection api resonse. it is call optional chaining.
// console.log(regularUser.fullNames?.userFullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {obj1,obj3}
console.log(obj4)
const obj5 = Object.assign(obj1,obj2,obj3)
console.log(obj5)
const obj6 = Object.assign({},obj1,obj2,obj3)
const obj7 = {...obj1,...obj2,...obj3}//spreed operator
console.log(obj7)
console.log(obj6)

//Most common syntax come value form data base.
const users = [
    {
        id: 1,
        email: "na@gmail.com"
    },
    {
        id: 2,
        email: "ka@gmail.com"
    },
    {
        id: 3,
        email: "ha@gmail.com"
    },
    {
        id: 4,
        email: "pa@gmail.com"
    }
]
console.log(users[0])
console.log(users[3].id)
console.log(users[2].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))


//+++++++++++++++++++++++++++++destructuring in javascript object+++++++++++++++++++++++++++
// Object destructuring is a way to pull out values from an object and store them in variables easily.
// Imagine an object is a lunchbox with labeled compartments.
// Destructuring lets you grab each item by its label and put it directly on your plate.

const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "ryan Dahl"
}
// const {courseInstructor} = course // if you think courseInstructor is big name you can small it.
const {courseInstructor : instructor} = course
console.log(instructor)



// 🔌 API (Application Programming Interface)
// An API is like a messenger between two software programs.
// It lets one app ask another app for data or services.
// 🧠 Example:
// Your weather app uses an API to ask a weather server:
// “Hey, what’s the temperature in Tamluk?”
// The server replies with the data.

// 📦 JSON (JavaScript Object Notation)
// JSON is the language that data often travels in.
// It’s a simple format that looks like JavaScript objects.

// APIs are mechanisms that enable two software components to communicate with each other using a set of definitions and protocols. For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.

// JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition