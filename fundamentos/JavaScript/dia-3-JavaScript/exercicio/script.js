let resultadoFatorial = 1;
let fatorial = 10;
let word = 'tryber';
let reverse = '';
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';
let menorPalavra = '';
let maiorPrimo = 0;

for (let index = fatorial; index > 0; index -= 1){
    resultadoFatorial = resultadoFatorial * index;
}
console.log(resultadoFatorial);


for (let index = 0; index < word.length; index += 1){
    reverse += word[word.length - 1 - index];
}

console.log(reverse);


menorPalavra = array[0];
for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];
    }
}
console.log(maiorPalavra);
console.log(menorPalavra);


let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);