/*
  Primo e ultimo
  Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore,
  l'altra che restituisca il minore.

  Esempio:
    Input: a = 1, b = -10, c = 4
    Output: minore = -10, maggiore = 4

  Variante:
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array,
  l'altra il valore minore.

  http://www.imparareaprogrammare.it
*/
const max = (n1, n2, n3) => {
  return Math.max(n1, n2, n3);
};
console.log(max(2, 6, 3));

const min = (n1, n2, n3) => {
  return Math.min(n1, n2, n3);
};
console.log(min(2, 6, 3));

const maxArray = (array) => {
  return Math.max(...array);
};
console.log(maxArray([2, 6, 3]));

const minArray = (array) => {
  return Math.min(...array);
};
console.log(minArray([2, 6, 3]));
