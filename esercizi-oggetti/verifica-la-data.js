/*
  Verifica la data
  Scrivi un programma che definisca un oggetto per la rappresentazione di una data e verifichi se è valida o meno.
  L'oggetto sarà composto da giorno, mese e anno (input a piacere).

  Esempio:
    Input:
      day: 18
      month: 19
      year: 2016
    Output:
      "La data non è valida!"

  http://www.imparareaprogrammare.it
*/
let verificaDay = (date) => {
  switch (true) {
    case date.month > 12:
      return "la data non è valida";
    case date.day > 31:
      return "la data non è valida";
    case date.month === 2 && date.day > 28:
      return "la data non è valida";
    case date.month === 4 ||
      date.month === 11 ||
      date.month === 6 ||
      (date.month === 9 && date.day > 30):
      return "la data non è valida";
    default:
      return "la data è valida";
  }
};
console.log(verificaDay((date = { day: 31, month: 9, year: 2016 })));
