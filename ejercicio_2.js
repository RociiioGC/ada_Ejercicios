const prompt = require("prompt-sync")({ sigint: true }); 

let numero = parseFloat(prompt("Ingrese un número: ")); 
// Pedir al usuario que ingrese un numero. 
//parseFloat() para convertir la entrada del usuario a un número

if (numero >= 0) {                 // if, else if para indicar condiciones de positivo o negativo segun el numero ingresado 
    console.log("positivo"); 
} else if (numero < 0) {
    console.log("negativo");
}
   