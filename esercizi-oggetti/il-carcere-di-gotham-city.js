/*
  Il carcere di Gotham City
  Sei appena stato nominato direttore presso il carcere di Gotham City.
  Hai l'arduo compito di scrivere un programma che gestisca:
  - I dati anagrafici delle guardie
  - I dati anagrafici dei detenuti
  - I fascicoli personali dei detenuti, che devono contenere almeno queste informazioni:
      - Un identificativo del criminale
      - La data di carcerazione
      - La data di scarcerazione
      - Il crimine commesso

  Visto che sei tu il capo, decidi se usare lo stesso oggetto per gestire sia le guardie che i criminali.
  In ogni caso dovrai definire la banca dati della prigione: crea un array di guardie, uno di detenuti e uno per i fascicoli.

  Prevedi la possibilià di:
    - Assumere nuove guardie
    - Schedare nuovi carcerati
    - Aggiungere nuovi fascicoli
    - Visualizzare l'elenco per ciascuna categoria (guardie, criminali, fascicoli)
    - Effettuare ricerche nei fascicoli per nome del detenuto

  Nel carcere di Gothma City non tutti i detenuti arrivano alla data di scarcerazione,
  gestisci l’eventualità in cui un detenuto sia evaso e quella in cui sia deceduto.

  Scrivi una funzione di riepilogo dell'andamento del carcere e che stampi:
    - il numero delle guardie,
    - il numero di detenuti totali,
    - il numero di detenuti evasi,
    - il numero di detenuti deceduti all’interno della struttura.

  http://www.imparareaprogrammare.it
*/
class Person {
  constructor(nome, cognome) {
    (this.nome = nome), (this.cognome = cognome);
  }
}

class Guardia extends Person {
  super() {}
}
class Detenuto extends Person {
  super() {}
}
class Fascicolo {
  constructor(identificativo, dataCarcerazione, dataScarcerazione, crimine) {
    (this.identificativo = identificativo),
      (this.dataCarcerazione = dataCarcerazione),
      (this.dataScarcerazione = dataScarcerazione),
      (this.crimine = crimine);
  }
}

let guardia1 = new Guardia("Alberto", "Macis");
let guardia2 = new Guardia("Luca", "Forma");
let detenuto1 = new Detenuto("Daniele", "Testi");
let detenuto2 = new Detenuto("Kevin", "Fuccio");

let fascicolo1 = new Fascicolo(
  "#12345",
  "12 - 6 - 2013",
  "24 - 3 - 2020",
  "Stupro di nane"
);
let fascicolo2 = new Fascicolo(
  "#6789",
  "12 - 6 - 2015",
  "24 - 3 - 2022",
  "commercio clandestino di agrumi"
);

const guardie = [guardia1, guardia2];
const detenuti = [detenuto1, detenuto2];
const fascicoli = [fascicolo1, fascicolo2];

const AggiungiGuardia = (name, surname) => {
  let newGuardia = new Guardia(name, surname);
  guardie.push(newGuardia);
  return guardie;
};
console.log(AggiungiGuardia("Alessandro", "D'ascenzo"));

const AggiungiDetenuto = (name, surname, crimine, dataCarcerazione) => {
  let newDetenuto = new Detenuto(name, surname);
  let newFascicolo = new Fascicolo(
    "#65443",
    dataCarcerazione,
    "24 - 3 - 2023",
    crimine
  );
  detenuti.push(newDetenuto);
  fascicoli.push(newFascicolo);
  return detenuti, fascicoli;
};
console.log(
  AggiungiDetenuto(
    "Francesco",
    "DiClemente",
    "serial Killer notturno",
    23 - 6 - 2023
  )
);
