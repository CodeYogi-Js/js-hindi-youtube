// Immediately Invoked function (IIFE)
(function chai(){
    //Named iife
    console.log("Database Connected....")
})();

// 🔸 Why do we need it?
// - ✅ To run code immediately without polluting the global scope
// - ✅ Useful for initial setup, like connecting servers or initializing variables
// - ✅ Helps create a private scope—variables inside don’t leak outside


( ()=>{
    console.log("Server Connected...")
})();


((name)=>{
    console.log(`DB connected two ${name}`)
})("ryan dahl")