let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let med = 0;
let marioNumero = 0;
let impares = 0;
let menorNumero = numbers[numbers.length - 1];
let contadorArray = [];
let div = 0;

//1
for(let contador = 0; contador < numbers.length; contador += 1){
    console.log(numbers[contador]);
}

//2
console.log('');
for(let contador = 0; contador < numbers.length; contador += 1){
    soma = soma + numbers[contador];
}
console.log(soma);

//3
console.log('');
med = soma / numbers.length;
console.log(med);

//4
console.log('');
if(med > 20){
    console.log('valor maior que 20');
} else{
    console.log('valor menor ou igual a 20');
}

//5
console.log('');
for(let contador = 0; contador < numbers.length; contador += 1){
    if(numbers[contador] > marioNumero){
        marioNumero = numbers[contador];
    }
}
console.log(marioNumero);

//6
console.log('');
for(let contador = 0; contador < numbers.length; contador += 1){
    if(numbers[contador] % 2 !== 0){
        impares += 1;
    }
}
if(impares !== 0){
    console.log(impares);
} else {
    console.log('nenhum valor ímpar encontrado');
}

//7
console.log('');
numeroAux = numbers[numbers.length - 1];
for(let contador = 0; contador < numbers.length; contador += 1){
    if(numbers[contador] < menorNumero){
        menorNumero = numbers[contador];
    }
}
console.log(menorNumero);

//8
console.log('');
for(let contador = 0; contador < 25; contador += 1){
    contadorArray.push(contador + 1);
    console.log(contadorArray[contador]);
}

//9
console.log('');
for(let contador = 0; contador < 25; contador += 1){
    div = contadorArray[contador] / 2;
    console.log(div);
}