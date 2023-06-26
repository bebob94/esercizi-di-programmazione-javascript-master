/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/

const dolci = (num) => {
  switch (true) {
    case num === 1:
      return "Tiramisù";
    case num === 2:
      return "Torta della nonna";
    case num === 3:
      return "Cheesecake alla nutella";
    case num === 4:
      return "Macedonia";
    default:
      return "Dolce non disponibile";
  }
};

console.log(dolci(1));
