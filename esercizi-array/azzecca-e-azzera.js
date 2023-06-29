/*
  Azzecca e azzera
  Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  Permetti all'utente di inserire un numero e azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  Richiedi all'utente un altro numero e così via.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.

  Consigli:
  Se non ricordi come generare un numero random e come convertirlo nel tuo intervallo riguarda l'esercizio sulle condizioni "Chi l'azzecca?".
  Per richiedere un numero all'utente puoi usare il comando prompt(), se vuoi saperne di più puoi controllare nella
  documentazione: https://developer.mozilla.org/it/docs/Web/API/Window/prompt

  http://www.imparareaprogrammare.it
*/

// Creazione dell'array e riempimento con numeri casuali da 1 a 50

// esercizi a caso
let per = { name: "alberto", surname: "macis" };

console.log(Object.entries(per));

for (const pers in per) {
  if (Object.hasOwnProperty.call(per, pers)) {
    const element = per[pers];
    console.log(element);
  }
}

console.log(per);

let array = [1, 3, 4, 6, 3, 7, 4, 7, 8, 9];

console.log(array.indexOf(4));

let str = "5";

console.log(typeof +str);

let aaa = "abcdefg";

console.log(aaa.split("").reverse().join(""));

console.log(array.filter((elem, index) => array.indexOf(elem) === index));
console.log([...new Set(array)]);

const uniqueArray = array.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(uniqueArray);
