/*
  Operazioni tra array
  Scrivi un programma che dati:
  - 2 array di 10 elementi interi casuali compresi tra 1 e 10,
  - il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array di appoggio.

  Esempio:
    Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione"
    Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".


  http://www.imparareaprogrammare.it
*/

const OperazioniTraArray = (array1, array2, operatore) => {
  switch (true) {
    case operatore === "somma":
      return array1.map((elem, index) => elem + array2[index]);
    case operatore === "sottrazione":
      return array1.map((elem, index) =>
        elem > array2[index] ? elem - array2[index] : array2[index] - elem
      );
    case operatore === "moltiplicazione":
      return array1.map((elem, index) => elem * array2[index]);
    case operatore === "divisione":
      return array1.map((elem, index) => elem / array2[index]);
    case operatore === "modulo":
      return array1.map((elem, index) => elem % array2[index]);
    case operatore === "potenza":
      return array1.map((elem, index) => Math.pow(elem, array2[index]));
    case operatore === "media":
      return array1.map((elem, index) => (elem + array2[index]) / 2);
    default:
      return "Inserire un operatore valido";
  }
};

let array1 = [];
for (let i = 0; i <= 10; i++) {
  const a = Math.floor(Math.random() * 10) + 1;
  array1.push(a);
}
console.log(array1);
let array2 = [];
for (let i = 0; i <= 10; i++) {
  const a = Math.floor(Math.random() * 10) + 1;
  array2.push(a);
}
console.log(array2);

console.log(OperazioniTraArray(array1, array2, "sottrazione"));
