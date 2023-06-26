/*
  Il conta cifre
  Scrivi un programma che dato un numero (massimo 9999) conti da quante cifre è formato.

  Esempi:
    Input: numero = 9
    Output: 1 cifra

    Input: numero = 245
    Output: 3 cifre

  http://www.imparareaprogrammare.it
*/
const conta = (num) =>
  num > 9999 || num <= 0
    ? "per favore inserisci un'altro numero"
    : num.toString().length;

console.log(conta(5666));
