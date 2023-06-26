/*
  Vinci tu!
  Scrivi un programma che dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizza più punti.
  Supponendo che ogni dado abbia al massimo 6 facce.

  Ogni giocatore tirerà il dado N volte, ciò significa che verrà generato un numero casuale
  ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore.


  Consigli:
  Il numero casuale generato, deve essere convertito nel tuo intervallo (min = 1, max = 6).
  Se non ti ricordi come si fa puoi rivedere l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

const vinciTu = (num) => {
  let player1 = 0;
  let player2 = 0;
  for (let i = 0; i < num; i++) {
    console.log((player1 += Math.floor(Math.random() * 6) + 1));
    console.log((player2 += Math.floor(Math.random() * 6) + 1));
  }
  return player1 > player2
    ? `complimenti ha vinto il player1 con ${player1} punti`
    : player1 === player2
    ? `riprovate è terminata in pareggio con ${player1} punti`
    : `complimenti ha vinto il player2 con ${player2} punti`;
};

console.log(vinciTu(3));
