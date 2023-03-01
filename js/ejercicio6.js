//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = parseInt(prompt(`Ingresa el primer número:`));
let num2 = parseInt(prompt(`Ingresa el segundo número:`));

if (num1 > num2) {
  document.write(`El número ${num1} es mayor que el número ${num2}.`);
} else if (num2 > num1) {
  document.write(`El número ${num2} es mayor que el número ${num1}.`);
} else {
  document.write("Los números son iguales.");
}