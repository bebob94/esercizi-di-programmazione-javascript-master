/*
  La calcolatrice
  Scrivi un programma che dati:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Restituisca il valore ottenuto calcolando l'operazione tra i due numeri.

  Le operazioni supportate sono le suguenti:
    somma
    sottrazione
    moltiplicazione
    divisione
    modulo (solo tra interi)
    potenza
    media


  Esempi:
    Input: a = 5, b = 6, operazione = "somma"
    Output: 11

    Input: a = 5, b = 6, operazione = "media"
    Output: 5.5


  Utilizza il costrutto Switch-Case, gestire anche il caso di operazione non valida (non presente tra le operazioni consentite).


  http://www.imparareaprogrammare.it
*/

const calcolatrice = (n1, n2, operazione) => {
  switch (true) {
    case operazione === "somma":
      return n1 + n2;
    case operazione === "sottrazione":
      return n1 > n1 ? n1 - n2 : n2 - n1;
    case operazione === " moltiplicazione":
      return n1 * n2;
    case operazione === "divisione":
      return n1 / n2;
    case operazione === "modulo":
      return n1 % n2;
    case operazione === "potenza":
      return n1 ** n2;
    case operazione === "media":
      return (n1 + n2) / 2;
    default:
      "inserire un operatore valido";
  }
};
console.log(calcolatrice(3, 4, "modulo"));
