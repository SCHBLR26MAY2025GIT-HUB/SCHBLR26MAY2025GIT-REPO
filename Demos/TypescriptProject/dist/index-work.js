"use strict";
console.log("Welcome to the TypeScript Project!");


var functionVar = function () {
    console.log("This is an function");
}

function functionCaller( functionVarParam) {
    functionVarParam();
}

functionCaller(functionVar);