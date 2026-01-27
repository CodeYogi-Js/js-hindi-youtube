// //✅1. Find the length of a string. 
// const userName = "Brendan Eich"
// console.log(userName.length)

// //✅2. Convert a string to uppercase. 
// const sentence = "Royel Bengal Tiger"
// console.log(sentence.toUpperCase())
// //toUpperCase()andtoLocalUpperCase() work different when 
// //work Local language like (Turkish).


// //✅3.Convert a string to lowercase.
// const str = "BRENDAN EICH"
// console.log(str.toLowerCase())

// //✅4.Trim spaces from the start and end of a string.
// const lorem = "     Would you like me to also show     " 
// // console.log(lorem.trim())
// console.log(lorem.trimEnd())
// console.log(lorem.trimStart())



// //✅5.Check if a string contains a certain word. 
// const word = "Would you like me to also show"
// console.log(word.includes("you"))


// //✅6. Check if a string starts with a specific word.
// const printing = "Hello world"
// console.log(printing.startsWith("world"))

// //✅7. Check if a string ends with a specific word.  
// const printings = "Hello world"
// console.log(printings.endsWith("world"))


// //✅8. Replace one word in a string with another.  
// const strs = "Hello hope you all good."
// console.log(strs.replace("you","me"))


// //✅9. Split a sentence into words. 
// const sentence = "Hello world program"
// console.log(sentence.split(" "))


// //✅10. Join an array of words back into a sentence.  
// const word = "hello world hope you all"
// const copyWord = (word.split(" "))
// console.log(copyWord.join(" "))

// //✅11. Extract the first character of a string. 
// const characters = "hello" 
// const copyChar = characters.charAt(0)
// console.log(copyChar)

// const anotherWay = characters.substring(0,1)
// console.log(anotherWay)

// const anotherWay2 = characters.slice(0,1)
// console.log(anotherWay2)

// //✅12. Extract the last character of a string.  
// const character = "hello word"
// console.log(character[(character.length -1)])
// console.log(character.substring((character.length -1)))
// console.log(character.charAt((character.length - 1)))
// console.log(character.slice(character.length - 1))

//✅13. Extract the first 5 characters of a string.  
// const word = "hello world"
// console.log(word.substring(0,5))
// console.log(word.slice((0,5)))



// //✅14. Extract the last 5 characters of a string.
// const lastchar = "hello world djNight"  
// console.log(lastchar.substring(lastchar.length - 5))
// console.log(lastchar.slice(-5))


// //✅15. Reverse a string manually (without `.reverse`).  
// const string = "manually"
// const tempVal = string.split("")
// const empty = []
// for(let i = tempVal.length -1; i>=0; i--){
//     empty.push(tempVal[i])
// }
// console.log(empty.join(""))

// const text = "manually"
// console.log(text.split("").reverse().join(""))


//✅16. Swap the case of each character (`"HeLLo"` → `"hEllO"`).
const character = "HeLLo"

//✅17. Check if a string is empty.  
//✅18. Check if two strings are equal ignoring case.  

// ---

// ## 🟡 Intermediate Level (Searching, Cleaning, Real‑World Use)
// 19. Find the index of the first occurrence of a word.  
// 20. Find the index of the last occurrence of a word.  
// 21. Count how many times a word appears in a string.  
// 22. Extract a substring from a string.  
// 23. Remove all spaces from a string.  
// 24. Replace multiple spaces with a single space.  
// 25. Capitalize the first letter of a string.  
// 26. Capitalize the first letter of every word in a sentence.  
// 27. Repeat a string multiple times.  
// 28. Pad a string with zeros until it reaches a certain length.  
// 29. Pad a string with `*` or spaces until a certain length.  
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


