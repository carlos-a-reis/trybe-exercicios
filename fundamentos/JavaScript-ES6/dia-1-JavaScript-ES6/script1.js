//parte 1
const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

testingScope(true);


//parte 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const order = (num1, num2) => num1 - num2;

console.log(`Os números ${oddsAndEvens.sort(order)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
      