/*
  Maggiore e minore
  Scrivi un programma che dati quattro numeri in input,
  restituisca in output il maggiore e il minore.

  Esempio:
    Input: a = 3, b = -1, c = 4, d = -2
    Output: maggiore = 4, minore = -2
    

  http://www.imparareaprogrammare.it
*/

const MaggioreMinore = (n1, n2, n3, n4) => {
  return {
    maggiore: Math.max(n1, n2, n3, n4),
    minore: Math.min(n1, n2, n3, n4),
  };
};

console.log(MaggioreMinore(1, 7, 5, 9));
