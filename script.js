
// Ejercicio 2

  // se declaran dos variables que almacenan los valores que ingrese el usuario, las que se conviertes de string a entero
let num1 = parseInt(prompt('ingrese un número mayor a 0'));
let num2 = parseInt(prompt('ingrese otro número mayor a 0 y distinto al primero'));

  // suma

let suma = num1 + num2;

  // resta

let resta = num1 - num2;

  // multiplicación

let mult = num1 * num2;

  // división

let div = num1/num2;

  // módulo

let mod = num1%num2;

  // se imprimen em consola los resultados de la operaciones con su respectivo mensaje

console.log('el resultado de la suma es ' + suma);
console.log('el resultado de la resta es ' + resta);
console.log('el resultado de la multiplicación es ' + mult);
console.log('el resultado de la división es' + div);
console.log('el módulo entre los números es ' + mod);

// Ejercicio 3

  // se declaran las Variables
let celsius = parseInt(prompt('Ingrese la temperatura en grados celsius'));
let farenheit = (celsius * 9.5) + 32;
let kelvin = celsius + 273.15;

  // Se imprimen en consola las conversiones
console.log('los ' + celsius + ' grados celsius equivalen a ' + farenheit + ' grados farenheit y a ' + kelvin + ' grados kelvin');

// Ejercicio 4

  // se declara la variable que almacenará el núumero ingresado por el usuario
let userInput = parseInt(prompt('Ingrese un número de días'));
let years = Math.trunc(userInput/365);
let weeks = Math.trunc((userInput%365)/7);
let days =  (userInput%365)%7;

console.log('los ' + userInput + ' días equivalen a ' + years + ' años, ' + weeks + ' semanas y ' + days + (' días'));


// Ejercicio 5

let numero1 = parseInt(prompt('Ingrese el primer número'));
let numero2 = parseInt(prompt('Ingrese el segundo número'));
let numero3 = parseInt(prompt('Ingrese el tercer número'));
let numero4 = parseInt(prompt('Ingrese el cuarto número'));
let numero5 = parseInt(prompt('Ingrese el quinto número'));

let sumatotal = numero1 + numero2 + numero3 + numero4 + numero5;
let promedio = sumatotal/5;

console.log('La suma de los números es ' + sumatotal + ' y el promedio es '+ promedio);
