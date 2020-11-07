/*Transformar el array para saber cuanto falta para que lleguen a 100(aca se muere)*/
let edades = [23, 20, 45, 5, 40, 2];
console.log("Ejercicio 1");
const deadPeople = edades.map((cadaPersona) => {
  return 100 - cadaPersona;
});
console.log(deadPeople);

/*Queremos filtrar el array edades para que queden mayores a 30 */
console.log("Ejercicio 2");
const mayores = edades.filter((may) => may > 30);
console.log(mayores);

/*Transformar el array para saber cuanto falta para que lleguen a 100(aca se muere)*/
console.log("Ejercicio 3");
let personas = [
  { nombre: "jota", edad: 27 },
  { nombre: "jorgito", edad: 24 },
  { nombre: "leo", edad: 23 },
  { nombre: "diego", edad: 31 },
];
const deadObjeto = personas.map((cuantoFalta) => {
  return 100 - cuantoFalta.edad;
});

console.log(deadObjeto);

/*Queremos filtrar el array edades para que queden mayores a 30 */
console.log("Ejercicio 4");
const objetosMayores = personas.filter(
  (nuevaFuncionMayoresAtreinta) => nuevaFuncionMayoresAtreinta.edad > 30
);
console.log(objetosMayores);

/*a todos los nombres hay que agregarle el apellido PIRULO */
let apellidos = ["alvarez", "romero", "mejia", "suarez"];

console.log("Ejercicio 5");
const agregoApellido = personas.map((people) => {
  return { nombre: people.nombre, edad: people.edad, apellido: "Pirulo" };
});
console.log(agregoApellido);
