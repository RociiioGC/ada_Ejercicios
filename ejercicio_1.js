const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt("Ingrese un número: ")); 

// pedir a usuario que ingrese un numero.
// parseFloat Convierte las entradas del usuario a números de punto flotante: un número con decimales, para que la multiplicación funcione.
// función prompt() para solicitar el dato al usuario

console.log(`Resultado: ${numero * 2}`); // realizar la multiplicacion y resultado. 

