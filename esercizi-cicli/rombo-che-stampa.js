/*
  Rombo che stampa!
  Scrivi un programma che dato un numero dispari stampi un rombo di lettere.

  Esempio:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X

  Consiglio:
  Per indentare puoi usare il tab con '\t'.
  
  http://www.imparareaprogrammare.it
*/

const Rombo = (num) => {
  if (num % 2 === 0) {
    return "inserisci un numero dispari";
  } else {
    let line;
    for (let i = 0; i < num; i++) {
      let spaces = Math.abs((num - 1) / 2 - i);
      let stars = num - 2 * spaces;
      line = " ".repeat(spaces) + "X".repeat(stars);
      console.log(line);
    }
    return line;
  }
};

console.log(Rombo(5));
