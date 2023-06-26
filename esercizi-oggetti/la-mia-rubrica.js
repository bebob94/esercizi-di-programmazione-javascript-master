/*
  La mia rubrica
  Scrivi un programma per la gestione di una rubrica telefonica.

  Definisci un oggetto che rappresenti un contatto e, visto che stai diventando bravo/a, le proprietà dell'oggetto sono a tua discrizione.
  L'unico vincolo che hai è di inserire almeno il nome e il numero di telefono come stringhe.

  Definisci un altro oggetto che rappresenti la lista dei contatti, quindi sarà formato da un array di contatti.
  Implementa i metodi dell'oggetto per le seguenti operazioni:
      - Visualizzazione dell'intera lista contatti
      - Inserimento di un nuovo contatto
      - Modifica di uno contatto passando in input l'indice dell'array
      - Cancellazione di un contatto passando in input l'indice dell'array
      - Ricerca passando il nome e restituendo il singolo contatto.

  Variante:
  Migliora i metodi di Modifica e Cancellazione, al posto di prendere in input l'indice dell'array passa in input il nome
  e ricava l'indice sul quale applipersone l'operazione.

  http://www.imparareaprogrammare.it
*/

class Contatto {
  constructor(nome, cognome, cellulare, email) {
    (this.nome = nome),
      (this.cognome = cognome),
      (this.cellulare = cellulare),
      (this.email = email);
  }
}

let person1 = new Contatto(
  "Alberto",
  "Macis",
  3477029995,
  "bebo.example@example.com"
);
let person2 = new Contatto(
  "Luca",
  "Forma",
  3402849335,
  "luca.example@example.com"
);
let person3 = new Contatto(
  "Daniele",
  "Testi",
  3489876447,
  "dani.example@example.com"
);

const contact = [person1, person2];

const visualizza = () => {
  return contact;
};
console.log(visualizza());

const inserimento = () => {
  contact.push(person3);
  return contact;
};
console.log(inserimento());

const modifica = (index) => {
  contact[index].cognome = "Macissssssssssss";
  return contact[index];
};
console.log(modifica(0));

const deletee = (index) => {
  contact.splice(index, 1);
  return contact.length;
};
console.log(deletee(2));

const search = (string) => {
  return contact.filter((elem) => elem.nome === string);
};
console.log(search("Alberto"));
