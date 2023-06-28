/*
  Metti un po' d'ordine
  Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Esempio:
    Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
    Output: [8, 7, 6, 5, 5, 3, 2, 1, -4, -2]

  Variante:
  Prova ad ordinali in modo crescente.

  Consigli:
  Ti consiglio di non usare il metodo sort per questo esercizio ma di provare a scrivere tu il codice per ordinare gli array,
  usando if e cicli ;)

  http://www.imparareaprogrammare.it
*/

let array1 = [];
for (let i = 0; i <= 10; i++) {
  const a = Math.floor(Math.random() * 21) - 10;
  array1.push(a);
}
console.log(array1);

const MettiUnPoDOrdine = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] < arr[j + 1]) {
        let max = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = max;
      }
    }
  }
  return arr;
};
console.log(MettiUnPoDOrdine(array1));
