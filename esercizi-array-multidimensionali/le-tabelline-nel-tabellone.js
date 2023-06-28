/*
  Le tabelline nel tabellone
  Scrivi un programma che stampi il tabellone delle tabelline, da 0 a 10.
  In questo modo:
    x | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0
    1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
    2 | 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20
    ...
    10 | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
    
  http://www.imparareaprogrammare.it
*/

const tabellone = () => {
  let result = "x";
  for (let j = 0; j <= 10; j++) {
    result += ` | ${j}`;
  }
  for (let ind = 0; ind <= 10; ind++) {
    result += `\n ${ind}`;
    for (let i = 0; i <= 10; i++) {
      result += ` | ${i * ind}`;
    }
  }
  console.log(result);
};

tabellone();
