function add7(num) {
    return num + 7;
}
console.log("Add number to 7");
console.log("3 + 7 =", add7(3));
console.log("\n");

function multiply(num1, num2) {
    return num1 * num2;
}
console.log("Multiply two numbers");
console.log("5 * 6 =", multiply(5, 6));
console.log("\n");

function capitalize(text) {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
}
console.log("Capitalize first letter only");
console.log("Input = lowercase, output =", capitalize("lowercase"));
console.log("Input = UPPERCASE, output =", capitalize("UPPERCASE"));
console.log("Input = BoTh, output =", capitalize("BoTh"));
console.log("\n");

function lastLetter(text) {
    return text.slice(-1);
}
console.log("Return last letter");
console.log("Input = abcd, output =", lastLetter("abcd"));