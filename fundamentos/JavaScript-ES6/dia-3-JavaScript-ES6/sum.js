//requisito 1

const isNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number'){
        throw new Error('parameters must be numbers');
    }
}

const sum = (a, b) => {
    isNumber(a,b);
    return a + b;
} 

//requisito 2

const myRemove = (array, item) => {
    for (let index = 0; index < array.length; index += 1) {
        if(item === array[index]){
            array.splice(array.indexOf(item), 1);
            return array;
        }
    }
    return array;
};

//requisito 3

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

//requisito 4

function encode(fraseCodificada) {
    let codificada = fraseCodificada;
    for (let cont = 0; cont < fraseCodificada.length; cont += 1){
      if(fraseCodificada[cont] === 'a' || fraseCodificada[cont] === 'e' || fraseCodificada[cont] === 'i' || fraseCodificada[cont] === 'o' || fraseCodificada[cont] === 'u'){
        codificada = codificada.replace('a', '1');
        codificada = codificada.replace('e', '2');
        codificada = codificada.replace('i', '3');
        codificada = codificada.replace('o', '4');
        codificada = codificada.replace('u', '5');
      }
    }
    return codificada;
}

function decode(fraseDecodificada) {
    let decodificada = fraseDecodificada;
    for (let cont = 0; cont < fraseDecodificada.length; cont += 1){
      if(fraseDecodificada[cont] === '1' || fraseDecodificada[cont] === '2' || fraseDecodificada[cont] === '3' || fraseDecodificada[cont] === '4' || fraseDecodificada[cont] === '5'){
        decodificada = decodificada.replace('1', 'a');
        decodificada = decodificada.replace('2', 'e');
        decodificada = decodificada.replace('3', 'i');
        decodificada = decodificada.replace('4', 'o');
        decodificada = decodificada.replace('5', 'u');
      }
    }
    return decodificada;
  }

module.exports = {sum, myRemove, myFizzBuzz, encode, decode};