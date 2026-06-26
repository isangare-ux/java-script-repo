const { addieren, multiplizieren } = require("./rechner");

const zahl1 = 5;
const zahl2 = 3;

console.log("Einfaches JavaScript Projekt");
console.log(`${zahl1} + ${zahl2} = ${addieren(zahl1, zahl2)}`);
console.log(`${zahl1} * ${zahl2} = ${multiplizieren(zahl1, zahl2)}`);
