// Scenario : Generate a scenario to randomly genertate a number and pass this function into another function to display the number in descending order.
export function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 50; // Generates a number between 50 and 149
}   

// Above function should be passed to another function to display the number in descending order in typescript.
function displayDescendingFromRandomNumber(generatorFunction:Function) {
    const randomNumber = generatorFunction();
    console.log("Random Number: ", randomNumber);
}

displayDescendingFromRandomNumber(generateRandomNumber);


// Involke teh displayDescendingFromRandomNumber function to from another ts file named index.ts


// imports, exports and moudles.