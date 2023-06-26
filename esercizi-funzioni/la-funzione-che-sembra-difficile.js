/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.

  Esempio:
    Input : N = 123456, K = 3
    Output: 4

    
  http://www.imparareaprogrammare.it
*/

const k_esima = (N, K) => {
  return N.toString().length >= K
    ? parseInt(N.toString()[N.toString().length - K])
    : 0;
};

console.log(k_esima(123456, 6));
