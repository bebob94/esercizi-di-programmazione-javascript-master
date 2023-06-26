/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/

const IPrimiNumeriPrimi = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % 2 === 0) return false;
  }
  return true;
};
console.log(IPrimiNumeriPrimi(9));

const INumeriPrimi = (num) => {
  const numeriPrimi = [];
  let numeroCorrente = 2;

  while (numeriPrimi.length < num) {
    if (IPrimiNumeriPrimi(numeroCorrente)) {
      numeriPrimi.push(numeroCorrente);
    }
    numeroCorrente++;
  }

  return numeriPrimi;
};

console.log(INumeriPrimi(5));
