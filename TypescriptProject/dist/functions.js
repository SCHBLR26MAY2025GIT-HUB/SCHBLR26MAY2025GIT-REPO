// Scenario : Generate a scenario to randomly genertate a number and pass this function into another function to display the number in descending order.
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 50; // Generates a number between 50 and 149
}
// Above function should be passed to another function to display the number in descending order in typescript.
function displayDescendingFromRandomNumber(generatorFunction) {
    const randomNumber = generatorFunction();
    console.log("Random Number: ", randomNumber);
}
displayDescendingFromRandomNumber(generateRandomNumber);
