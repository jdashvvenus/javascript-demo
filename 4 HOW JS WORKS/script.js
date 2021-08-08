"use strict";
//HOISTING AND TDZ

/*
//using var that are declared after are in TDZ
console.log(me);
var me = 'Mario';

//const and let that are declared after are in TDZ
//function expressions and function arrows use 'const'
console.log (funcExpr(2, 3));

const funcExpr = function (a, b) {
    return a + b
};

console.log (funcArrow(2, 3));
const funcArrow = (a, b) => a + b;
*/

/*
//function declarations will work even if they are declared after
console.log(funcDecl(2, 3));

function funcDecl(a, b) {
    return a + b
};
*/

//OBJECT MERGE
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2); //object.assign only creates a "shallow copy" of the object and not a "deep copy"
jessicaCopy.lastName = "Davis"; // successful - before marriage will show lastName of Williams and after marriage will show Davis
console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);

// when we try to push a new element in the array family, it will change both before and after because it is not a deep clone
/*jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage", jessica2);
console.log("After marriage", jessicaCopy);
*/
