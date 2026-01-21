//Stack (Primitive), Heap (Non-Primitive)
let myYoutubeName = "Hiteshchoudharydotcom"
let anotherYoutubeName = myYoutubeName

anotherYoutubeName = "chaiaurcode"
console.log(myYoutubeName)
console.log(anotherYoutubeName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne
console.log(userOne)
console.log(userTwo)

userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)



// +-------------------+        +---------------------------+
// |       STACK       |        |           HEAP            |
// |-------------------|        |---------------------------|
// | userTwo  ────────┐|        |                           |
// | userOne  ───────┐│|        |   {                       |
// | myName  "Ram"   |│|        |     email: "user@gmail",  |
// | age     20      |│|        |     upi: "user@ybl"       |
// |                 |│|        |   }                       |
// +-------------------+│        |                           |
//                      └──────▶ +---------------------------+

// Stack stores copy (address)
// Heap stores actual refarence
