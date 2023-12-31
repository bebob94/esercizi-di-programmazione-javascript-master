/*
  Chi l'azzecca?
  Scrivi un programma che dati due numeri di due ipotetici giocatori,
  generi un numero casuale compreso tra 1 e 100 (zero escluso),
  verifichi se uno dei due giocatori ha azzeccato il numero casuale,
  e in caso contrario quale dei due si è avvicinato di più al numero.

  Esempio:
    Input: giocatore 1 = 5, giocatore 2 = 10
    Output: Numero casuale generato = 7
            "Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più!"

  Consigli:
  Per generare un numero casuale utlizza la funzione javascript Math.random() che restituisce un intervallo compreso tra 0 e 1.
  Il valore ottenuto dovrà essere convertito per ottenere un valore valido per il tuo intervallo, in questo modo:
    (Math.random() * (max-min) + min) ovvero, nel tuo caso:
    (Math.random() * (100-1) + 1)
  Ricordati che il valore dovrà essere intero quindi dovrai arrontondarlo usando Math.floor()

  http://www.imparareaprogrammare.it
*/

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
    case Math.abs(player1 - random) < Math.abs(player2 - random):
      return "Il giocatore 1 si è avvicinato di più";
    case Math.abs(player1 - random) > Math.abs(player2 - random):
      return "Il giocatore 2 si è avvicinato di più";
  }
};
console.log(gioco(20, 80));
