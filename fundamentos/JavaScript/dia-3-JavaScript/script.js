// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//"A soma total de 1 a 50 é:"


let sum = 0;
for (let index = 0; index <= 50; index += 1) {
     sum += index;
}
console.log('A soma total de 1 a 50 é: ' + sum);



//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let div = 0;
for (let index = 2; index <= 150; index += 1){
    if(index % 3 == 0){
        div += 1;
    }
}
    if (div == 50) {
        console.log("No céu tem pão sim");
    }



// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

var player01 = "Pedra";
var player02 = "Papel";

if (player01 === "Tesoura" && player02 === "Papel") {
    console.log("Player 1 won");
} else if (player01 === "Papel" && player02 === "Pedra") {
    console.log("Player 1 won");
} else if (player01 === "Pedra" && player02 === "Tesoura") {
    console.log("Player 1 won");
} else if (player01 === player02) {
    console.log("A Ties");
} else {
    console.log("Player 2 won");
}

//4 -
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

var idade = 18

idade => 18 ? "A pessoa é maior de idade" : "A pessoa não é maior de idade";


//condição? valor se for verdareiro : valor se for falso

// 5 -
//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

var carolzita = 5;
var murilo = 72;
var baeta = 18;

if (carolzita < murilo && carolzita < baeta) {
    console.log("Carolzita é a mais nova.");
} else if (murilo < carolzita && murilo < baeta) {
    console.log("Murilo é o mais novo");
} else {
    console.log("Baêta é a mais nova");
}