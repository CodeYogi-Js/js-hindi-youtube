// Scope
// var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner : ",a)
}


// console.log(a)
// console.log(b)
// console.log(c)

//Nested Scope

function one(){
    const username = "ryan dahl"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()



if(true){
    const username = "Brendan Eich"
    if(username === "Brendan Eich"){
        const website = "Youtbe"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)



//+++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

console.log(addTwo(5))// hosting beacuse function declare with a variable so can not execute first function
const addTwo = function(num){
    //called expresion
    return num + 2
}