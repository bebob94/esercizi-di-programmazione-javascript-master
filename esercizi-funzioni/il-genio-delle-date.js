/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti: il giorno e il mese.
  La funzione deve restituire a quale giorno dell'anno corrisponde (compreso tra 1 e 366).

  Esempio:
    Input : giorno = 5, mese = 2
    Output:
            36

  Consigli:
  Puoi definire un array con i giorni di ogni mese e ciclarlo.

          
  http://www.imparareaprogrammare.it
*/

const genioDelleDate = (giorno, mese) => {
  const year = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let result = 0;
  for (let i = 0; i < mese - 1; i++) {
    result += year[i];
  }
  result += giorno;
  return result;
};

console.log(genioDelleDate(5, 2));
