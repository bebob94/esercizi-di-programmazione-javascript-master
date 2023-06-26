/*
  Un bel garage
  Scrivi un programma per la gestione di un garage.
  Definisci un oggetto che rappresenti un automobile, dovrà contenere almeno marca del veicolo e nome del modello.
  Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca.

  Consigli:
  Puoi usare un array come base per salvare le automobili.

  http://www.imparareaprogrammare.it
*/
class Automobile {
  constructor(nome, modello) {
    (this.nome = nome), (this.modello = modello);
  }
}

let car1 = new Automobile("Ford", "Fiesta");
let car2 = new Automobile("Fiat", "punto");
let car3 = new Automobile("Peugeot", "307");

const garage = [car1, car2, car3];

const printMarca = (modello) => {
  return `${garage
    .filter((elem) => elem.modello === modello)
    .map((elem) => elem.nome)}`;
};

console.log(printMarca("Fiesta"));
