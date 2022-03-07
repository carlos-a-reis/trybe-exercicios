const isNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number'){
        throw new Error('parameters must be numbers');
    }
}

const sum = (a, b) => {
    isNumber(a,b);
    return a + b;
} 

module.exports