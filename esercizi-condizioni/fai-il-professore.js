/*
  Fai il professore
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente
  Utilizza costrutto If.

  Esempio:
    Input: v = 29
    Output: Distinto

  Variante
  Realizzare una versione con il costrutto Switch-Case. In questo caso gestire anche il caso in cui il voto inserito non sia valido.

  http://www.imparareaprogrammare.it
*/

const professore = (voto) => {
  if (18 <= voto && voto < 21) {
    return "sufficiente";
  } else if (21 <= voto && voto < 24) {
    return "buono";
  } else if (24 <= voto && voto < 27) {
    return "distinto";
  } else if (27 <= voto && voto <= 29) {
    return "ottimo";
  } else if (voto === 30) {
    return "eccellente";
  }
};
const professore2 = (voto) => {
  switch (true) {
    case 18 <= voto && voto < 21:
      return "sufficiente";
    case 21 <= voto && voto < 24:
      return "buono";
    case 24 <= voto && voto < 27:
      return "distinto";
    case 27 <= voto && voto <= 29:
      return "ottimo";
    case voto === 30:
      return "eccellente";
  }
};

console.log(professore(25));
console.log(professore2(30));
