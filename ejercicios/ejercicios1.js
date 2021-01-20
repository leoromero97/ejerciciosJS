/*Ejercicio 1:
Hacer una funcion que tome una lista de numeros, y devuelva la posicion de sus picos.
Un pico es un numero donde tanto antecesor y sucesor son menores.
ej: [1,2,3,4,5,4,3,4,5] ---> el las posiciones 4 y 8 son picos, porque viene subiendo hast ahi, y despues empieza a bajar.*/


// Hacer una funcion que dada un alista de numeros me devuelva las posiciones donde se encuentran los picos.
// Definimos un pico como un valor donde no existe otro al rededor mas grande que el

function peaks(numbers) {
  let peakList = []
  // Logic goes here
  // recorrer la lista y comparar con el anterior y el siguiente el numero actual, y si es un pico lo guardo en el resultado
  if(numbers.lengh > 1) {
    //ver el primero
    if (numbers[0] > numbers[1]) {
      peakList.push(0);
    }
    for(let i = 1;  i <= numbers.length - 2; i++) {
      if(numbers[i] > numbers[i-1] && number[i] > number[i+1]) {
        peakList.push(i);
      }
    }
    //ver el ultimo
    if (numbers[numbers.length-1] > numbers[numbers.length-2]) {
      peakList.push(numbers.length-1);
    } 
  } else {
    if (numbers.lenght === 1) {
      peakList.push(0)
    }
  }
  return peakList;
} 
function peaks(numbers) {
  let peakList = []
  // Logic goes here
  // recorrer la lista y comparar con el anterior y el siguiente el numero actual, y si es un pico lo guardo en el resultado
  if(numbers.lengh > 1) {
    //ver el primero
    for(let i = 0;  i <= numbers.length - 1; i++) {
      let masGrandeQueElAnterior = true;
      let masGrandeQueElSiguiente = true;
      if(i > 0) {
        masGrandeQueElAnterior = numbers[i] > numbers[i-1]
      }
      if (i < numbers.lengh - 1) {
        masGrandeQueElSiguiente = number[i] > number[i+1];
      }
      if(masGrandeQueElAnterior && masGrandeQueElSiguiente) {
        peakList.push(i);
      }
    }
    //ver el ultimo
  } else {
    if (numbers.lenght === 1) {
      peakList.push(0)
    }
  }
  return peakList;
}
function peaks2(numbers) {
  let peakList = []
  // asumo que vengo subiendo y no voy a bajar
  let vengoDeSubir = true;
  let voyABajar = false;
  for(let i = 0; i <= numbers.length - 2; i++) {
    //reviso y empiezo a bajar
    voyABajar = numbers[i] > numbers[i+1]
    if(vengoDeSubir && voyABajar){
      peakList.push(i)
      vengoDeSubir = false;
    }
    //actualizo para proximo paso si estoy vengoDeSubir
    vengoDeSubir = !voyABajar;
   }
   // me fijo si termino subiendo (vale para listas de un solo elemento)
   if (numbers.length > 0 && !voyABajar) {
     peakList.push(numbers.length -1);
   }
  return peakList;
}