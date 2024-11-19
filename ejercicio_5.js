const prompt = require("prompt-sync")({ sigint: true }); 

let nombre = prompt("Ingrese su nombre: ");  //pedir al usuario que ingrese su nombre 

console.log(`Hola ${nombre}!!! Que bueno verte devuelta.`);   // saludo personalizado al usuario 
