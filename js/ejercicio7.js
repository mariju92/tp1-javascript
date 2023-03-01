//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

if (num1 > num2 && num1 > num3) {
  document.write(`El número ${num1} es el mayor.`);
} else if (num2 > num1 && num2 > num3) {
  document.write(`El número ${num2} es el mayor.`);
} else if (num3 > num1 && num3 > num2) {
  document.write(`El número ${num3} es el mayor.`);
} else {
  document.write("Los números son iguales.");
}