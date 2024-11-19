const prompt = require("prompt-sync")({ sigint: true }); 

let numero1 = parseFloat(prompt("Ingrese un primer número: "));
let numero2 = parseFloat(prompt("Ingrese un segundo número: "));

console.log(`resultado: ${numero1 + numero2}`);

