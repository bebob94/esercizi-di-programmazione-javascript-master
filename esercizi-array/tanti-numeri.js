/*
  Tanti numeri
  Scrivi un programma che dato array di numeri, calcoli la media dei valori e
  restituisca in output la media e tutti i valori minori della media.

  Esempio:
    Input: a = [3, 5, 10, 2, 8]
    Output: media = 5.6, valori minori = [3, 5, 2]

  Variante:
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.

  http://www.imparareaprogrammare.it
*/

const TantiNumeri = (array) => {
  let media =
    array.reduce((previus, current) => previus + current) / array.length;
  console.log(media);
  console.log(array.filter((elem) => elem < media));
  console.log(array.filter((elem) => elem > media));
};

TantiNumeri([3, 5, 10, 2, 8]);
