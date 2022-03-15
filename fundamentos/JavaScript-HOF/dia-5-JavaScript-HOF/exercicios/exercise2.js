// escreva sum abaixo
const sum = (...numbers) => {
    return numbers.reduce((acc, value) => acc + value);
};

console.log(sum(1, 2, 4, 8));