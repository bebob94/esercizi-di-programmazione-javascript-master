/*
  La tombola magica
  Scrivi un programma che dato:
  - un array di 10 elementi di numeri casuali interi (compresi tra 1 e 90 senza ripetizioni),
  - un array di 10 numeri interi a tuo piacimento (compresi tra 1 e 90 senza ripetizioni)
  Verifichi quanti numeri scelti da te sono presenti nell'array principale e restituisca un risultato del tipo:
    2 numeri uguali => ambo
    3 numeri uguali => terna
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
    tutti i numeri uguali => tombola

  In caso di vittoria dovrà essere stampato un messaggio "Hai fatto X",
  in caso di perdita dovrà essere mostrato il messaggio "Mi dispiace, hai perso!".


  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".

  http://www.imparareaprogrammare.it
*/

const verificaTombola = (arrayPrincipale, arrayScelti) => {
  let numeriUguali = 0;
  for (let i = 0; i < arrayScelti.length; i++) {
    if (arrayPrincipale.includes(arrayScelti[i])) {
      numeriUguali++;
    }
  }
  switch (numeriUguali) {
    case 2:
      return "Hai fatto ambo!";
    case 3:
      return "Hai fatto terna!";
    case 4:
      return "Hai fatto quaterna!";
    case 5:
      return "Hai fatto cinquina!";
    case 10:
      return "Hai fatto tombola!";
    default:
      return "Mi dispiace, hai perso!";
  }
};

let arrayPrincipale = [];
while (arrayPrincipale.length < 10) {
  const numeroCasuale = Math.floor(Math.random() * 90) + 1;
  if (!arrayPrincipale.includes(numeroCasuale)) {
    arrayPrincipale.push(numeroCasuale);
  }
}
let arrayScelti = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log("Array principale:", arrayPrincipale);
console.log("Numeri scelti:", arrayScelti);
console.log(verificaTombola(arrayPrincipale, arrayScelti));
