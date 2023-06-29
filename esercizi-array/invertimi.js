/*
  Invertimi
  Scrivi un programma che dato un numero N, generi un array di N numeri casuali
  e stampi sia l'array ottenuto che quello invertito.

  Esempio:
    Input: N = 5
    Output: array ottenuto = [3, 5, 10, 2, 8], array invertito = [8, 2, 10, 5, 3]

  Variante:
  Non utilizzare array/variabili di appoggio per l'inversione.

  Consigli:
  Per la variante ricordati l'uso degli indici del ciclo ;)

  http://www.imparareaprogrammare.it
*/
const invertimi = (n) => {
  let array1 = [];
  for (let i = 0; i < n; i++) {
    const a = Math.floor(Math.random() * 10) + 1;
    array1.push(a);
  }
  console.log(array1);
  console.log(array1.reverse());
};

invertimi(5);
