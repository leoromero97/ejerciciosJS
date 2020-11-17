/*Ejercicio 1:
Hacer una funcion que tome una lista de numeros, y devuelva la posicion de sus picos.
Un pico es un numero donde tanto antecesor y sucesor son menores.
ej: [1,2,3,4,5,4,3,4,5] ---> el las posiciones 4 y 8 son picos, porque viene subiendo hast ahi, y despues empieza a bajar.*/

let numbers = [];
function picos(numbers) {
  let pico = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
      pico.push(i);
    }
  }
  return `El numero pico está en la(s) posición(es) [${pico}]`;
}
picos();