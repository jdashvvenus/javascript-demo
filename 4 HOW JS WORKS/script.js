'use strict';
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


