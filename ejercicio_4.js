const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt("Ingrese un número entero: ")); 

if (numero % 2 === 0) { 
    console.log("El número es par."); 

} else { 
    console.log("El número es impar."); 
} 