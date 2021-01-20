/*Hacer una funcion que tome un string y devuelva verdadero o false si es o no un palindromo.
Un palindromo es una palabra que se lee igual al derecho como al reves.
ej: "neuquen", "emme" o una frase como "salta ese atlas".  */
//Solution 1.
function Palindrome(str) {
  let lowNoSpacesStr = str.toLowerCase().replace(/ /gi, "");
  let reverseStr = lowNoSpacesStr.split("").reverse().join("");
  return reverseStr === lowNoSpacesStr;
}
