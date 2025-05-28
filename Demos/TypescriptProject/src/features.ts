console.clear();
function printJSFeatures() {
    console.log("Functions are first class citizens");
};

printJSFeatures();

function sum(num1, num2) {
    console.log(num1 + num2);
}

// Does JavaScript support function overloading?
// No, JavaScript does not support function overloading in the same way as some other languages like Java or C#. However, you can achieve similar behavior by checking the types of arguments within the function.

sum(5, 10);
sum("test", "rest");
sum(true, false); 
sum(false,false);

function sum1(num1: any, num2: any) {
    console.log(num1 + num2);
}

sum1("test1", "rest");