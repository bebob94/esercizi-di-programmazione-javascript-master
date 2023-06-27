/*
  Sommali tutti
  Scrivi un programma che:
    - Prenda in input due numeri, N e M.
    - Generi una matrice di NxM popolata di valori casuali da 1 a 100.
    - Stampi la matrice e la somma di tutti i valori contenuti.

    Esempio:
      Input: N = 2, M = 3
      Output:
        matrice =
        [
          [1, 50, 100],
          [1, 20, 40],
        ]
        somma = 212

  http://www.imparareaprogrammare.it
*/

const generaMatriceCasuale = (N, M) => {
  let matrice = [];
  let somma = 0;
  for (let i = 0; i < N; i++) {
    let riga = [];
    for (let j = 0; j < M; j++) {
      const valoreCasuale = Math.floor(Math.random() * 100) + 1;
      riga.push(valoreCasuale);
      somma += valoreCasuale;
    }
    matrice.push(riga);
  }
  console.log("somma =", somma);
  return matrice;
};

console.log(generaMatriceCasuale(2, 3));
