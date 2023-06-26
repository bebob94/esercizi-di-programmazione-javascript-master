/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/

const max = (n1, n2, n3, n4, n5, n6, n7) => {
  return `la giornta più calda ha fatto ${Math.max(
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7
  )} gradi`;
};
console.log(max(22, 31, 18, 15, 34, 23, 26));

const min = (n1, n2, n3, n4, n5, n6, n7) => {
  return `la giornta più fredda ha fatto ${Math.min(
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7
  )} gradi`;
};
console.log(min(22, 31, 18, 15, 34, 23, 26));
