// //✅1. Write a program that finds the length of a given string?
// const userName = "Brendan Eich"
// console.log(userName.length)

// //✅2. Write a program that converts a given string into uppercase letters?
// const sentence = "Royel Bengal Tiger"
// console.log(sentence.toUpperCase())
// //toUpperCase()andtoLocalUpperCase() work different when 
// //work Local language like (Turkish).


// //✅3. Write a program that converts a given string into lowercase letters?
// const str = "BRENDAN EICH"
// console.log(str.toLowerCase())

// //✅4. Write a program that removes extra spaces from the beginning and end of a given string?
// const lorem = "     Would you like me to also show     " 
// // console.log(lorem.trim())
// console.log(lorem.trimEnd())
// console.log(lorem.trimStart())



// //✅5. Write a program that checks whether a given string contains a specific word?
// const word = "Would you like me to also show"
// console.log(word.includes("you"))


// //✅6. Write a program that checks whether a given string strat with a specific word?
// const printing = "Hello world"
// console.log(printing.startsWith("world"))

// //✅7. Write a program that checks whether a given string ends with a specific word? 
// const printings = "Hello world"
// console.log(printings.endsWith("world"))


// //✅8. Write a program that replaces one word in a given string with another word?
// const strs = "Hello hope you all good."
// console.log(strs.replace("you","me"))


// //✅9. Write a program that splits a given sentence into individual words?
// const sentence = "Hello world program"
// console.log(sentence.split(" "))


// //✅10. Write a program that joins an array of words back into a single sentence?  
// const word = "hello world hope you all"
// const copyWord = (word.split(" "))
// console.log(copyWord.join(" "))

// //✅11. Write a program that extracts the first character from a given string?
// const characters = "hello" 
// const copyChar = characters.charAt(0)
// console.log(copyChar)

// const anotherWay = characters.substring(0,1)
// console.log(anotherWay)

// const anotherWay2 = characters.slice(0,1)
// console.log(anotherWay2)

// //✅12. Write a program that extracts the last character from a given string?
// const character = "hello word"
// console.log(character[(character.length -1)])
// console.log(character.substring((character.length -1)))
// console.log(character.charAt((character.length - 1)))
// console.log(character.slice(character.length - 1))

//✅13. Write a program that extracts the first 5 characters from a given string? 
// const word = "hello world"
// console.log(word.substring(0,5))
// console.log(word.slice((0,5)))



// //✅14. Write a program that extracts the last 5 characters from a given string?
// const lastchar = "hello world djNight"  
// console.log(lastchar.substring(lastchar.length - 5))
// console.log(lastchar.slice(-5))


// //✅15. Write a program that reverses a given string manually, without using the built‑in .reverse() method?
  
// const string = "manually"
// const tempVal = string.split("")
// const empty = []
// for(let i = tempVal.length -1; i>=0; i--){
//     empty.push(tempVal[i])
// }
// console.log(empty.join(""))

// const text = "manually"
// console.log(text.split("").reverse().join(""))


// //✅16. Write a program that swaps the case of each character in a given string (uppercase becomes lowercase, and lowercase becomes uppercase). For example, the string "HeLLo" should become "hEllO.?

// let character = "HeLLo"
// let convert = character.split("")
// for(let i = 0; i < convert.length; i++){
//     if(convert[i] === convert[i].toUpperCase()){
//        convert[i] = convert[i].toLowerCase()
//     }else{
//        convert[i] = convert[i].toUpperCase()
//     }
// }
// character = convert.join("")
// console.log(character)


// //✅17. Write a program that checks whether a given string is empty (contains no characters.)?
// const emptyStr = "" 
// if(emptyStr === "" ){
//    console.log("string is empty.")
// }else{
//    console.log("string not empty.")
// }

// //✅18. Write a program that checks whether two given strings are equal, ignoring differences in uppercase and lowercase letters?
// const firstStr = "Hello";
// const secondStr = "hello";
// if (firstStr.toLowerCase() === secondStr.toLowerCase()) {
//   console.log("both are same.");
// } else {
//   console.log("both are not same.");
// }






// //🟡Intermediate Level (Searching, Cleaning, Real‑World Use)


// //✅19. Write a program that finds the position (index number) of the first time a specific word appears in the given string?
// // JavaScript is fun and JavaScript is powerful
// // Find the first occurrence of the word JavaScript
 
// const strings = "javaScript is fun and javaScript is powerful"
// console.log(strings.indexOf("javaScript"))


// //✅20. Write a program that finds the position (index number) of the last time a specific word appears in the given string?
// // JavaScript is fun and JavaScript is powerful
// // Find the last occurrence of the word JavaScript

// const text = "javaScript is fun and javaScript is powerful"
// console.log(text.lastIndexOf("javaScript"))


// //✅21. Write a program that counts how many times a specific word occurs within a given string? 
// const word = "Would you like me to tailor this sentence so it contains a word repeated twice, making it easier to test both first occurrence to and last to occurrence questions together"
// let words = word.split(" ")
// let count = 0;
// for(let i = 0; i < words.length; i++){
//    if(words[i] === "to"){
//       count++;
//    }
// }
// console.log("apper is specific word "+count+" time.")


// //✅22. Given a string, write a program to extract a part of it (a substring) between two specified positions.
// const string = "javaScript is powerful"
// const extra = string.substring(0,10)
// console.log(extra)
// // 23. Remove all spaces from a string.  
// const str = "javaScript is fun to learn"
// const noSpace = str.replaceAll(" ","")
// console.log(noSpace)


//✅24. Replace multiple spaces with a single space.  
// const str = "JavaScript    is   fun";
// const fixedStr = str.replace(/\s+/g, " ");
// console.log(fixedStr);


//✅25. Write a function that takes a string as input and returns the same string, but with its first letter capitalized.
// const firstLatter = function(word){
//     if( word.length>0 && typeof(word) === "string"){
//         let tempArr = word.split("")
//         tempArr[0] = tempArr[0].toUpperCase()
//         return tempArr.join("")
//     }else{
//         return (`please pass string value.`)
//     }
// }
// console.log(firstLatter("hello world"))


//✅26. Write a function in JavaScript that capitalizes the first letter of every word in a given sentence.
// function latterUpperCase(letter) {
//     if (typeof letter === "string" && letter.length > 0) {
//         let words = letter.replace(/\s+/g, " ").split(" ");
//         let result = [];

//         for (let i = 0; i < words.length; i++) {
//             let word = words[i];
//             let capitalized = word[0].toUpperCase() + word.slice(1);
//             result.push(capitalized);
//         }

//         return result.join(" ");
//     } else {
//         return "please enter sentence......";
//     }
// }
// const everyFirstLatterUpperCase = latterUpperCase("Would you     like me to also  show  you   how to collect.");
// console.log(everyFirstLatterUpperCase);  


// //✅27. Write a function in JavaScript that takes a string and a number as input, and returns the string repeated that many times in sequence.
// const repSentence = (str,num)=>{
//     return str.repeat(num)
// }
// console.log(repSentence("hello world",5))


// //✅28. Pad a string with zeros until it reaches a certain length. 
// let str = '123'
// string = str.split("")
// let addNum = []
// let howMuch = 15
// for(let i = howMuch - string.length; i >0; i--){
//     let temp = '0'
//     if(howMuch>string.length){
//         addNum.push(temp)
//     }
// }
// let final = addNum.concat(string).join("")
// console.log(final) 


////✅29. Write a function in JavaScript that takes Pad a string with `*` or spaces until a certain length. 
// function padString(str, val){
//     let temp = str.split("")
//     const symbol = "*"
//     let arr = []
//     for(let i = val - temp.length; i>0; i--){
//         arr.push(symbol)
//     }
//     return arr.concat(temp).join("")
// }
// console.log(padString("34dse3",10))


// 30. Sort the characters of a string alphabetically.  
// 31. Count vowels in a string.  
// 32. Count consonants in a string.  
// 33. Check if a string contains only digits.  
// 34. Check if a string contains only alphabets.  
// 35. Check if a string contains special characters.  
// 36. Check if a string is a palindrome.  
// 37. Reverse the order of words in a sentence.  
// 38. Capitalize every alternate word in a sentence.  
// 39. Remove duplicate words from a sentence.  
// 40. Remove duplicate characters from a string.  

// ---

// ## 🔵 Developer Level (Real‑World Project Scenarios)
// 41. Validate if an email address contains `@` and `.`.  
// 42. Validate if a string is a phone number.  
// 43. Validate if a string is a URL.  
// 44. Validate if a string is a valid JSON format.  
// 45. Check if a password is at least 8 characters long.  
// 46. Check if a password contains uppercase, lowercase, number, and special character.  
// 47. Mask a credit card number except the last 4 digits.  
// 48. Format a phone number `(123) 456-7890` from raw digits.  
// 49. Extract the domain name from a URL.  
// 50. Extract the file extension from `"resume.pdf"`.  
// 51. Extract the filename from `"C:/Users/Arindam/Documents/resume.pdf"`.  
// 52. Extract hashtags from `"I love #coding and #javascript"`.  
// 53. Extract mentions from `"Hello @arindam, welcome!"`.  
// 54. Remove HTML tags from a string.  
// 55. Convert `"2026-01-26"` into `"26/01/2026"`.  
// 56. Convert `"26/01/2026"` into `"January 26, 2026"`.  
// 57. Generate a slug from `"Hello World!"` → `"hello-world"`.  

// ---

// ## 🔴 Advanced / Algorithmic Challenges
// 58. Find the longest word in a sentence.  
// 59. Find the shortest word in a sentence.  
// 60. Count the frequency of each character in a string.  
// 61. Find the most repeated character in a string.  
// 62. Find the least repeated character in a string.  
// 63. Find all substrings of a string.  
// 64. Find the longest substring without repeating characters.  
// 65. Build a function that checks if two strings are anagrams.  
// 66. Implement your own `.split()` function.  
// 67. Implement your own `.replaceAll()` function.  
// 68. Implement your own `.trim()` function.  
// 69. Implement your own `.toUpperCase()` function.  
// 70. Implement your own `.toLowerCase()` function.  
// 71. Parse a CSV string into an array of objects.  
// 72. Convert a JSON string into an object.  
// 73. Convert an object into a JSON string.  
// 74. Extract query parameters from a URL.  


