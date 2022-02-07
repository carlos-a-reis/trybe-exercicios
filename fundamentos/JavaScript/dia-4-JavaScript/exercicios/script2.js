// Verifica se a palavra é palindromo

let verificaPalindrome = 'arara';

function ePalindromo(palavra){
    let reverso = '';
    for (let index = palavra.length - 1; index >= 0; index -= 1){
        reverso += palavra[index];
    }
    if (palavra === reverso){
        return true;
    } else{
        return false;
    }
}

console.log(ePalindromo('arara'));
console.log(' ');
console.log(ePalindromo('desenvolvimento'));
console.log(' ');

// Retorna o indice maior

function maiorNumeor (numero){
    let auxiliar = 0;
    for(let index in numero) {
        if (numero[index] > numero[auxiliar]){
            auxiliar = index;
        }
    }
    return auxiliar;
}

console.log(maiorNumeor([2, 3, 6, 7, 10, 1]));
console.log('');

// Retorna o indice menor

function menorNumero(numero){
    let auxiliar = 0;
    for(let index in numero){
        if(numero[index] < numero[auxiliar]){
            auxiliar = index;
        }
    }
    return auxiliar;
}

console.log(menorNumero([2, 4, 6, 7, 10, 0, -3]));
console.log('');

// Retorna maior nome

function maiorNome(nome){
    let auxiliar = '';
    for(let index in nome){
        if(nome[index].length > auxiliar.length){
            auxiliar = nome[index];
        }
    }
    return auxiliar;
}

console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log('');

//Retorna o que mais repete

//Soma dos numeros ate N

function somaNumerosAteN(numero){
    let soma = 0;
    for(let index = 1; index <= numero; index += 1){
        soma += index;
    }
    return soma;
}

console.log(somaNumerosAteN(5));
console.log('');

//Compara final string

function finalString (stringWord, stringEnd){
    if(stringWord[stringWord.length - 1] === stringEnd[stringEnd.length - 1] && stringWord[stringWord.length - 2] === stringEnd[stringEnd.length - 2]){
        return true;
    } else{
        return false;
    }
}

console.log(finalString('trybe', 'be'));
console.log('');