/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

let sommaAndMedia = (n1, n2, n3, n4, n5) => {
  return `somma = ${n1 + n2 + n3 + n4 + n5}, media = ${
    (n1 + n2 + n3 + n4 + n5) / 5
  }`;
};
console.log(sommaAndMedia(1, 2, 3, 4, 5));
