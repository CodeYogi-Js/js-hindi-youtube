//✅1.Find the maximum and minimum number in an array.
// const array = [234, 142, 434, 349, 456, 139, 314];
// console.log(Math.min(...array))


// const arr = [12, 45, 78, 23, 56, 89];
// let min = arr[0]
// for(let i = 1; i <arr.length; i++){
//     if(min>arr[i]){
//         min = arr[i]
//     }
// }
// console.log(min)


// const number = [17, 83, 42, 6, 95, 28, 71, 54, 39, 12];
// let minVal = Number.MAX_SAFE_INTEGER
// let i = 0;
// while(i< number.length){
//     if(minVal > number[i]){
//         minVal = number[i]
//     }
//     i++;
// }
// console.log(minVal)


//✅2.Find the sum of all elements in an array.
// const elements = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// let i = 0;
// do {
//     sum +=elements[i]
//     i++
// } while (i < elements.length);
// console.log(`${sum}, sum of all element in array.`)


//✅3.Reverse the order of elements in an array.
// const list = [1, 2, 3, 4, 5]
// // list.reverse()
// const lists = list.toReversed()
// console.log(lists)


// const array = [1, 2, 3, 4, 5];
// let reverseArray = []
// for(let i = array.length -1; i >= 0; i--){
//     reverseArray.push(array[i])
// }
// console.log(reverseArray)


//✅4.Search for a specific number in an array and return its index (and position).
// const number = [1, 3, 5, 7, 8]
// const index = number.indexOf(3)
// console.log(`specific number in an array index is ${index} and position is ${index +1}`)


//✅5.Count how often a specific number appears in an array (occurrences).
// const nums = [1, 2, 3, 1,2, 3, 1, 2, 3]
// const findElement = 3
// let count = 0;
// for(let i = 0; i < nums.length; i++){
//     if(findElement === nums[i]){
//         count++;
//     }
// }
// console.log(`Specific Number Appears in array are ${count} time.`)


//✅6.Swap two numbers using a third variable.
// let a = 5
// let b = 10
// let c = a;
// a = b;
// b = c;
// console.log("Swap two number a is "+ a +" Another b is "+ b)


//✅7.Swap two numbers without using a third variable.
// let num1 = 103
// let num2 = 205
// console.log(`before swap num1 is ${num1} and num2 is ${num2}`)
// num1 = num1 + num2
// num2 = num1 - num2
// num1 = num1 - num2
// console.log(`after swap num1 is ${num1} and num2 is ${num2}`)


//✅8. Check if an array is sorted.
// const array = [2, 5, 7, 1, 9]
const array = [1,2, 5, 7, 9]
let val = array[0]
for(let i = 1; i <array.length; i++){
    if(val < array[i] ){
        val = array[i];
        if(val > array[i]){
            console.log(`array is sorted.`)
            break;
        }
    }else{
        console.log(`array is not sorted.`);
        break;
    }
}


//✅9.Merge two arrays into one combined array.
// const arr1 = [1, 5, 8]
// const arr2 = [3, 9, 4]
// let marge = arr1.concat(arr2)
// console.log(marge)

// let arr1 = [1, 5, 8]
// let arr2 = [3, 9, 4]
// arr1.push(arr2)
// const margeArr = arr1.flat(Infinity)
// console.log(margeArr)

// let arr1 = [1, 5, 8]
// let arr2 = [3, 9, 4]
// console.log([...arr1,...arr2])


//✅10.Remove repeated elements from an array and return a unique list (remove duplicates).
const list = [23, 4, 34, 23, 5, 7, 9, 23, 7,9]
const uniqueList = [...new Set(list)]
console.log(uniqueList)



