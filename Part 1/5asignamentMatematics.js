let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
console.log(levelUp);
console.log(powerLevel);
console.log(multiplyMe);
console.log(quarterMe);

/*Ejercicio 1, Utilice el +=operador de asignación matemática para aumentar el valor almacenado en levelUppor 5.*/
levelUp += 5;
/*Ejercicio 2, Utilice el -=operador de asignación matemática para disminuir el valor almacenado en powerLevelpor 100. */
powerLevel -= 100;
/*Ejercicio 3, Utilice el *=operador de asignación matemática para multiplicar el valor almacenado en multiplyMepor 11. */
multiplyMe *= 11;
/*Ejercicio 4, Utilice el /=operador de asignación matemática de dividir el valor almacenado en quarterMepor 4. */
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements.
console.log("The value of levelUp:", levelUp);
console.log("The value of powerLevel:", powerLevel);
console.log("The value of multiplyMe:", multiplyMe);
console.log("The value of quarterMe:", quarterMe);

/*INCREMENTO Y DECREMENTO */
let gainedDollar = 3;
let lostDollar = 50;
console.log(gainedDollar, lostDollar);
/*Ejercicio 1, Usando el operador de incremento, aumente el valor de gainedDollar. */
gainedDollar++;
/*Ejercicio 2, Usando el operador de decremento, disminuya el valor de lostDollar. */
lostDollar--;
console.log(gainedDollar, lostDollar);

/*CONCATENAR VARIABLES Y STRINGS */
/*Ejercicio 1,Crea una variable nombrada favoriteAnimaly configúrala igual a tu animal favorito. */
const favoriteAnimal = "Dog";
/*Ejercicio 2, use console.log() para imprimir 'My favorite animal: ANIMAL'en la consola. Use la concatenación de cadenas para que ANIMAL se reemplace con el valor en su favoriteAnimalvariable.*/
console.log("My favorite animal:" + favoriteAnimal);

/*STRING INTERPOLATION*/
/*Ejercicio 1, Cree una variable llamada myName y asígnele su nombre. */
const myName = "Leo";
/*Ejercicio 2 Cree una variable llamada myCity y asígnele el nombre de su ciudad favorita.,  */
const myCity = "Buenos Aires";
/*Ejercicio 3,  Use un solo template literal para interpolar sus variables en la oración a continuación. Úselo console.log()para imprimir su oración en la consola en el siguiente formato:*/
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

/*TIPO DE OPERADOR*/
/*Ejercicio 1, Utilice console.log()para imprimir el typeof newVariable. */
let newVariable = "Playing around with typeof.";
console.log(typeof newVariable);
/*Ejercicio 2, reasignemos la variable. Debajo de la console.log()declaración, reasignar newVariablea 1. */
newVariable = 1;
/*Ejercicio 3, Dado que asignó este nuevo valor a newVariable, ¡tiene un nuevo tipo! En la línea debajo de su reasignación, use console.log()para imprimir typeof newVariablenuevamente. */
console.log(typeof newVariable);
