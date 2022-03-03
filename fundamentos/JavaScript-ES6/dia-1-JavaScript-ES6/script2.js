//parte 1
let num = 4;

const fatorial = numero => {
    let fator = 1;
    for(let index = numero; index >= 1; index -= 1){
        fator = fator * index;
    }
    return fator;
}

const resultadoFatorial = numer => {
    const resultado = (numer === 0) ? 1 : fatorial(num);
    return resultado;
}

console.log(resultadoFatorial(num));


//parte 2
let frase = `Antônio foi no banheiro e não sabemos o que aconteceu`
let maiorPalavra = frase.split(' ')[0];

for (let index = 0; index < frase.split(' ').length; index += 1) {
    (frase.split(' ')[index].length > maiorPalavra.length) ? maiorPalavra = frase.split(' ')[index] : 1 + 1; 
}

console.log(maiorPalavra);


//parte 3
let fraseX = `Tryber x aqui!`;
let fraseResultado = ``;

for (let index = 0; index < fraseX.split(' ').length; index += 1) {
    (fraseX.split(' ')[index] === `x`) ? fraseResultado += `tz` + ` ` : fraseResultado += fraseX.split(' ')[index] + ` `;
}

console.log(fraseResultado);