//✅JavaScript Variable -->
//A variable is container which store a value. In kitchen we have container to store rice, dal, sugar etc. similar to that variable in javascript store value of a contant.

/*✅Rules for naming variable
1. first character must be alphabet or underscore.
2. No commas, Blanks allowed.
3. No special Symbol other than (_) allowed.
4. Variable name are case sensitive.
5. We must create a meaning full variable name in programs. This enhance readability of our program.
*/

/*✅JavaScript variable Naming Conventions.
Camel Case --- myVariableName ***for javaScript***
pascale Case --- MyVariableName
snake Case --- my_variable_name
kebab Case --- my-variable-name
upper sneak Case --- MY_VARIABLE_NAME
*/

/*✅ what are Var, let and const in JavaScipt
javaScript follow one rule before variable diclaretion. declare which type of variable. javaScript have 3 way to diclare variable Var(var are outdeted after ES6), let, const.

var --  the old way of declareing variable (used before 2015).It is function-scoped, meaning it doesn't care about block boundaries like {}.
var name = "Arindam";
var name = "Coder"; // allowed, but confusing

let -- Introduced in ES6 as the modern way to declare variables. it is block-scoped, meaning it only exists inside {}. can be updated, but not redeclared in same scope.
let age = 25;
age = 26 // allowed
//let age = 30; ❌ not allowed in same block.

const -- also introduced in ES6. used for variables that shoulde never update. it is block-scope like (let). you must assign a value when declaration time.
const country = "India"
contry = "USA" //❌ error, cannot reassing
*/
const accountId = 123456
let accountEmail = 'ari@gmail.com'
var accountPassword = "234454"
accountCity = 'jaipur'
let accountState;

//acccountId = 2 // Not allowed
accountEmail = "hecte@gmail.com";
accountPassword = '1234453'
accountCity = "Bengaluru"

console.log(accountId)
console.table([accountEmail, accountId, accountPassword, accountCity, accountState])


/*✅keywords?
 A keyword is a reserved word in a programming language that has a predefined meaning and cannot be used for anything else.
 // let let = 33; ❌
 // var var = '333' ❌
 // const const = '333' ❌
 */

/*✅Scope of Variables
Global Scope -- A variable declared outside any function/block is accessible everywhere.

Function Scope -- -  Variables declared with var inside a function are only accessible inside that function.

Block Scope -- Variables declared with let or const inside { } (like in loops or if statements) are only accessible inside that block.


*/
/*✅Hoisting
JavaScript moves variable declarations to the top of their scope before execution.
*/
console.log(a);
var a = 10;
console.log(a);