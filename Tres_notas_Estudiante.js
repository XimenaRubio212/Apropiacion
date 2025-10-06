let nota_1 = parseFloat(prompt("Ingrese la primer nota"));
let nota_2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota_3 = parseFloat(prompt("Ingrese la tercera nota"));

let promedio = (nota_1 + nota_2 + nota_3) / 3 

alert("El promedio de sus notas es: " + promedio.toFixed(1))