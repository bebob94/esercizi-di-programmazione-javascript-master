/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre numeri: A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B

  Variante:
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti:
  vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.

  Consigli per la variante:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Se non ricordi come richiedere all'utente un valore in input, rivedi l'esercizio sugli array "Azzecca e azzera"

  http://www.imparareaprogrammare.it
*/

const sensitivo = (A, B, N) => {
  switch (true) {
    case N - A === B - N:
      return 0;
    case N - A > B - N:
      return 1;
    case N - A < B - N:
      return -1;
  }
};

console.log(sensitivo(6, 15, 10));

const gioco = (player1, player2) => {
  const random = Math.floor(Math.random() * 100) + 1;
  console.log(random);
  switch (true) {
    case player1 === random && player2 !== random:
      return "Vincitore giocatore 1";
    case player1 !== random && player2 === random:
      return "Vincitore giocatore 2";
    case player1 === random && player2 === random:
      return "Complimenti siete entrambi vincitori";
    case player1 !== random && player2 !== random:
      return "ancora nessun vincitore";
  }
};
console.log(gioco(20, 35));
