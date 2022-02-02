const a = 32;
const b = 74;
const c = 12;

console.log("1-adição: ", a + b);
console.log("1-subtração: ", a - b);
console.log("1-multiplicação: ", a * b);
console.log("1-divisão: ", a / b);
console.log("1-módulo: ", a % b);

if (a > b) {
    console.log("2: ", a, " é maior");
} else {
    console.log("2: ", b, " é maior");
}

if (a > b && a > c) {
    console.log("3: ", a, " é maior");
} else if (b > a && b > c) {
    console.log("3: ", b, " é maior");
} else {
    console.log("3: ", c, " é maior");
}

if (a > 0) {
    console.log("4: positive");
} else if (a < 0) {
    console.log("4: negative");
} else {
    console.log("4: zero");
}

if (a >= 0 && b >= 0 && c >= 0){
    console.log("5: ", a + b + c == 180);
} else {
    console.log("5: há um ângulo negatico ou nulo. triângulo invalido");
}

console.log("8: ", a % 2 == 0 || b % 2 == 0 || c % 2 == 0);

console.log("9: ", a % 2 != 0 || b % 2 != 0 || c % 2 != 0);